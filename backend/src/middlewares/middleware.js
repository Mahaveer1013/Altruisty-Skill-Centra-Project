import User from '../models/user.model.js';
import { generateAccessToken } from '../utils/tokenUtils.js';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import { JWT_SECRET, REFRESH_TOKEN_SECRET,SECRET_KEY } from '../utils/constants.js';

const loginRequired = async (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;

  try {
    // Verify the access token
    jwt.verify(accessToken, JWT_SECRET, async (err, decoded) => {
      console.log('Decoded Access Token:', decoded);
      
      // If there's an error with the access token (e.g., expired), check the refresh token
      if (err && (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError') && refreshToken) {
        jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, async (refreshErr, refreshDecoded) => {
          if (refreshErr) {
            return res.status(401).json({ message: 'Refresh token invalid or expired' });
          }

          let user, newAccessToken;

          // Update 1: Check if the refresh token contains `username`
          if (refreshDecoded.username) {
            user = await User.findOne({ username: refreshDecoded.username });
          } 
          // Update 2: If not `username`, check if the refresh token contains `id`
          else if (refreshDecoded.id) {
            user = await User.findById(refreshDecoded.id);
          }

          // If the user is not found in the database, return a 404 error
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }

          // Generate a new access token with the user information
          newAccessToken = generateAccessToken({
            username: user.username,  // Update 3: Now using `username` for token generation
            id: user._id,             // Update 4: Also using `id` for token generation
            user_type: user.user_type
          });

          // Set the new access token in the cookie
          res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            maxAge: 3600000, // 1 hour
            secure: true,   // Set to true in production with HTTPS
            sameSite: 'None' // Set 'SameSite' to 'None' for cross-site cookies
          });

          req.user = user;
          console.log('User assigned to req.user after refresh token verification:', req.user);
          next();
        });
      } 
      // If there's no error with the access token, proceed with the request
      else if (err) {
        return res.status(401).json({ message: 'Invalid access token' });
      } else {
        let user;
        // Update 5: Check if the decoded access token contains `username`
        if (decoded.username) {
          user = await User.findOne({ username: decoded.username });
        } 
        // Update 6: If not `username`, check if the decoded access token contains `id`
        else if (decoded.id) {
          user = await User.findById(decoded.id);
        }

        // If the user is not found in the database, return a 404 error
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;
        console.log('User assigned to req.user after access token verification:', req.user);
        next();
      }
    });
  } catch (error) {
    console.error('Error in authentication middleware:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

const checkIsAdmin = async (req, res, next) => {
  try {
    if (req.user.user_type === 1) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized User' });
    }
  } catch (error) {
    console.log(error);
  }
};


// Middleware to decrypt request data
const decryptRequest = (req, res, next) => {
  if (req.is('application/octet-stream')) {
      let data = '';
      req.setEncoding('utf8');
      req.on('data', (chunk) => {
          data += chunk;
      });
      req.on('end', () => {
          try {
              const decryptedBytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
              const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
              req.body = JSON.parse(decryptedText);
              next();
          } catch (error) {
              res.status(400).json({
                  success: false,
                  message: 'Failed to decrypt the value or it might not be encrypted.',
              });
          }
      });
  } else {
      next();
  }
};


// Middleware to encrypt response data
const encryptResponse = (req, res, next) => {
  const originalSend = res.send;

  res.send = function (body) {
    if (!req.enc && req.is('application/octet-stream')) {
      console.log('response:', body);
      
      try {
        if (body !== null) {
          try {
            body= CryptoJS.AES.encrypt(body, SECRET_KEY).toString();
          } catch (error) {
            console.error('Error during value encryption:', error);
            throw new Error('Encryption failed');
          }
        }
        req.enc = true;
      } catch (error) {
        console.error('Error during response encryption:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }
    return originalSend.call(this, body);
  };

  next();
};

export { loginRequired, checkIsAdmin, decryptRequest, encryptResponse };
