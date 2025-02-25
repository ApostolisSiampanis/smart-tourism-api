const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    Country: {
        type: String,
        required: [true, "Country name is required"],
        unique: true,
        trim: true
    },
    QualityOfLife: {
        type: Number,
        min: [1, "Quality of Life ranking must be at least 1"],
        max: [100, "Quality of Life ranking must not exceed 100"],
        default: null
    },
    Adventure: {
        type: Number,
        min: [1, "Adventure ranking must be at least 1"],
        max: [100, "Adventure ranking must not exceed 100"],
        default: null
    },
    Heritage: {
        type: Number,
        min: [1, "Heritage ranking must be at least 1"],
        max: [100, "Heritage ranking must not exceed 100"],
        default: null
    },
    CostOfLivingIndex: {
        type: Number,
        default: null
    },
    RestaurantPriceIndex: {
        type: Number,
        default: null
    }
});

module.exports = mongoose.model('Country', CountrySchema);