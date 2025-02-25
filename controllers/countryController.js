// import Country model
const Country = require('../models/Country');

// getAllCountries function
exports.getAllCountries = async (req, res, next) => {
    try {
        const countries = await Country.find();
        res.json(countries);
    } catch (error) {
        next(error);
    }
}

// filterCountries function
exports.filterCountries = async (req, res, next) => {
    const { criterion, type, limit } = req.query;

    try {
        const sortOrder = type === 'lowest' ? 1 : -1;
        const countries = await Country.find().sort({ [criterion]: sortOrder }).limit(parseInt(limit));
        res.json(countries);
    } catch (error) {
        next(error);
    }
}

// updateCountry function
exports.updateCountry = async (req, res, next) => {
    try {
        const updatedCountry = await Country.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCountry);
    } catch (error) {
        next(error);
    }
}

// addCountry function
exports.addCountry = async (req, res) => {
    const newCountry = new Country(req.body);
    try {
        const savedCountry = await newCountry.save();
        res.status(201).json(savedCountry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// deleteCountry function
exports.deleteCountry = async (req, res) => {
    try {
        await Country.findByIdAndDelete(req.params.id);
        res.json({ message: 'Country deleted' });
    } catch (error) {
        next(error);
    }
}