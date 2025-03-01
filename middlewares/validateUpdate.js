const Country = require('../models/Country');

const validateUpdate = async (req, res, next) => {
    const validKeys = ['Country', 'QualityOfLife', 'Adventure', 'Heritage', 'CostOfLivingIndex', 'RestaurantPriceIndex'];
    const { body } = req;

    for (const key in body) {
        if (!validKeys.includes(key)) {
            return res.status(400).json({ message: `Invalid key: ${key}` });
        }

        if (key === 'QualityOfLife' || key === 'Adventure' || key === 'Heritage') {
            if (body[key] !== null && (typeof body[key] !== 'number' || body[key] < 1 || body[key] > 100)) {
                return res.status(400).json({ message: `${key} must be a number between 1 and 100` });
            }
        }

        if (key === 'CostOfLivingIndex' || key === 'RestaurantPriceIndex') {
            if (body[key] !== null && typeof body[key] !== 'number') {
                return res.status(400).json({ message: `${key} must be a number` });
            }
        }
    }

    if (body.Country) {
        try {
            const existingCountry = await Country.findOne({ Country: body.Country });
            if (existingCountry && existingCountry._id.toString() !== req.params.id) {
                return res.status(400).json({ message: 'Country name must be unique' });
            }
        } catch (error) {
            return next(error);
        }
    }

    next();
};

module.exports = validateUpdate;