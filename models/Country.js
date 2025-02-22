const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    Country: String,
    QualityOfLife: Number,
    Adventure: Number,
    Heritage: Number,
    CostOfLivingIndex: Number,
    RestaurantPriceIndex: Number
});

module.exports = mongoose.model('Country', CountrySchema);