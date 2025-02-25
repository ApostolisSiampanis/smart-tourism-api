//import express
const express = require('express');
// import countryController module
const countryController = require('../controllers/countryController');
// import validateFilter middleware
const validateFilter = require('../middlewares/validateFilter');
// create router object
const routes = express.Router();

routes.get('/', countryController.getAllCountries);
routes.get('/filter', validateFilter, countryController.filterCountries); // apply validateFilter middleware
routes.put('/:id', countryController.updateCountry);
routes.post('/', countryController.addCountry);
routes.delete('/:id', countryController.deleteCountry);

module.exports = routes;