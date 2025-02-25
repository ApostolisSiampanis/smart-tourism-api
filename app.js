// import express
const express = require('express');
// import morgan
const morgan = require('morgan');
// import countryRoutes
const countryRoutes = require('./routes/countryRoutes');
// import errorHandler
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware 
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/countries', countryRoutes);
// Error handling middleware
app.use(errorHandler);

module.exports = app;