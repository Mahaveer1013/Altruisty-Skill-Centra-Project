import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import admin from 'firebase-admin';
import mongoose from 'mongoose';
import apiRoutes from './src/routes/routes.js'; 
import { decryptRequest, encryptResponse } from './src/middlewares/middleware.js';
import socketRouter from './src/routes/socketRouter.js';
import http from 'http';
import { Server } from 'socket.io';
import socketLoginRequired from './src/middlewares/socketLoginRequired.js';
import ProfileRoutes from "./src/routes/profile.js"
// Initialize environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(encryptResponse);
app.use(decryptRequest);

// CORS configuration for Express
app.use(cors({
  origin: true, // Frontend URL
  credentials: true
}));

app.use(cookieParser());

// Create HTTP server and Socket.IO server
const server = http.createServer(app);
const io = new Server(server,
  {
    cors:{
      origin:true,
      credentials:true
    }
  }
);

export const userSocketMap = new Map();

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// API routes
app.use('/api', apiRoutes);
app.use('/api',ProfileRoutes)

// Socket.IO middleware for authentication
io.use(socketLoginRequired);

// Setup Socket.IO routes
socketRouter(io);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(5000, () => {
      console.log('Server is running on port http://localhost:5000');
    });
  })
  .catch(error => {
    console.error('Database connection error:', error);
  });
