import jwt from 'jsonwebtoken';
import { generateAccessToken } from '../utils/tokenUtils.js'; // Ensure you have utility functions for token generation
import { userSocketMap } from "../../index.js";
import User from '../models/user.model.js';
import { JWT_SECRET, REFRESH_TOKEN_SECRET } from '../utils/constants.js';

const socketLoginRequired = async (socket, next) => {
  const cookies = socket.request.headers.cookie;
  const accessToken = cookies ? cookies.split('; ').find(row => row.startsWith('accessToken='))?.split('=')[1] : null;
  const refreshToken = cookies ? cookies.split('; ').find(row => row.startsWith('refreshToken='))?.split('=')[1] : null;

  if (!accessToken && !refreshToken) {
    return next(new Error('Authentication error: Tokens are missing'));
  }

  try {
    if (accessToken) {
      jwt.verify(accessToken, JWT_SECRET, async (err, decoded) => {
        if (err && refreshToken) {
          jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, async (refreshErr, refreshDecoded) => {
            if (refreshErr) {
              return next(new Error('Authentication error: Refresh token invalid or expired'));
            }

            const user = await User.findOne({ email: refreshDecoded.email });
            if (!user) {
              return next(new Error('Authentication error: User not found'));
            }

            const newAccessToken = generateAccessToken({
              email: user.email,
              user_type: user.user_type
            });

            socket.request.headers.cookie = `accessToken=${newAccessToken}; ${cookies}`;

            socket.user = user;
            userSocketMap.set(user._id.toString(), socket.id);
            next();
          });
        } else if (err) {
          return next(new Error('Authentication error: Invalid access token'));
        } else {
          const user = await User.findOne({ email: decoded.email });
          if (!user) {
            return next(new Error('Authentication error: User not found'));
          }

          socket.user = user;
          userSocketMap.set(user._id.toString(), socket.id);
          next();
        }
      });
    } else {
      jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, async (refreshErr, refreshDecoded) => {
        if (refreshErr) {
          return next(new Error('Authentication error: Refresh token invalid or expired'));
        }

        const user = await User.findOne({ email: refreshDecoded.email });
        if (!user) {
          return next(new Error('Authentication error: User not found'));
        }

        const newAccessToken = generateAccessToken({
          email: user.email,
          user_type: user.user_type
        });

        socket.request.headers.cookie = `accessToken=${newAccessToken}; ${cookies}`;

        socket.user = user;
        userSocketMap.set(user._id.toString(), socket.id);
        next();
      });
    }
  } catch (error) {
    console.error('Socket.io authentication error:', error);
    next(new Error('Server error'));
  }
};

export default socketLoginRequired;
