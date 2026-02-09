const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Global middleware for cross-origin access and JSON parsing
app.use(cors());
app.use(express.json());

// Establish database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Register routes
app.use('/', require('./routes'));

// Global error handler for catching unhandled exceptions
app.use((err, req, res, next) => {
  res.status(500).send({ message: 'An internal server error occurred' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});