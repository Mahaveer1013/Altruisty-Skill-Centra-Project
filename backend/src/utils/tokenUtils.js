import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import { JWT_SECRET, REFRESH_TOKEN_SECRET } from './constants.js';
dotenv.config()

export function generateAccessToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

export function generateRefreshToken(payload) {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
}