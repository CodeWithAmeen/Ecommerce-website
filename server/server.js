const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(express.json()); // Parses incoming JSON requests

// Routes
app.use('/api/auth', authRoutes); // Authentication routes

// Error handling middleware
app.use(errorHandler); // Handles errors (like 404, 500, etc.)

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
