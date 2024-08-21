import dotenv from 'dotenv'
dotenv.config()

export const JWT_SECRET = process.env.JWT_SECRET
export const SESSION_SECRET = process.env.SESSION_SECRET
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET
export const SECRET_KEY = process.env.SECRET_KEY
export const IS_PRODUCTION = process.env.IS_PRODUCTION
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
