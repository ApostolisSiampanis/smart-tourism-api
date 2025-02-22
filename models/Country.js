const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    Country: String,
    "Quality of Life": Number,
    Adventure: Number,
    Heritage: Number,
    "Cost of Living Index": Number,
    "Restaurant Price Index": Number
});

module.exports = mongoose.model('Country', CountrySchema);