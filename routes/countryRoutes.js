//import express
const express = require('express');
// import countryController module
const countryController = require('../controllers/countryController');
// create router object
const routes = express.Router();

routes.get('/', countryController.getAllCountries);
routes.get('/filter', countryController.filterCountries);
routes.put('/:id', countryController.updateCountry);
routes.post('/', countryController.addCountry);
routes.delete('/:id', countryController.deleteCountry);

module.exports = routes;