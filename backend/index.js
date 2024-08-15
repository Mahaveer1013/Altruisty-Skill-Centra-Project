import express from 'express'
import cors from 'cors'
import XLSX from 'xlsx'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import axios from 'axios'
import { MONGO_URI } from './utils/constants.js'

const app = express();
const port = 5000;

const allowedOrigins = [
  'https://altruisty.site/',
  'https://altruisty-company-website.vercel.app',
  'http://localhost:3000'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
  connectTimeoutMS: 30000
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error:', error);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
