require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const authRoutes = require('./routes/authentication');
const app = express();

const isProduction = process.env.NODE_ENV !== 'production';

// Set up server
app.use(express.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 30
		}
	})
);
if (isProduction) app.use(cors());

// Connect server to routes
app.use('/auth', authRoutes);

// Listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
