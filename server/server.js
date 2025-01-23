require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbconnection');
const logger = require('./middleware/logger');
const dataRoutes = require('./routes/dataRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

const app = express();

// Middleware
app.use(logger);
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api', dataRoutes);
app.use('/api', applicationRoutes);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
