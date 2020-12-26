require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authentication');
const app = express();

const isProduction = process.env.NODE_ENV !== 'production';

// Set up server
app.use(express.json());
if (isProduction) app.use(cors());

// Connect server to routes
app.use('/auth', authRoutes);

// Listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
