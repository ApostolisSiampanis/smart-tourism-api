//import express
const express = require('express');
// import countryController module
const countryController = require('../controllers/countryController');
// import validateFilter middleware
const validateFilter = require('../middlewares/validateFilter');
// import validateUpdate middleware
const validateUpdate = require('../middlewares/validateUpdate');

// create router object
const routes = express.Router();

routes.get('/', countryController.getAllCountries);
routes.get('/filter', validateFilter, countryController.filterCountries); // apply validateFilter middleware
routes.put('/:id', validateUpdate, countryController.updateCountry); // apply validateUpdate middleware
routes.post('/', countryController.addCountry);
routes.delete('/:id', countryController.deleteCountry);

module.exports = routes;