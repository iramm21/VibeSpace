require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import routes
const authRoutes = require('./routes/auth');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Connection
const connectDB = require('./config/db');
connectDB();

// Use Routes
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
