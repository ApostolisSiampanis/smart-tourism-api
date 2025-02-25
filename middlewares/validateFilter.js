const validateFilter = (req, res, next) => {
    const { criterion, type, limit } = req.query;

    const validCriteria = ['QualityOfLife', 'Adventure', 'Heritage', 'CostOfLivingIndex', 'RestaurantPriceIndex'];
    const validTypes = ['lowest', 'highest'];

    if (!validCriteria.includes(criterion)) {
        return res.status(400).json({ message: 'Invalid criterion' });
    }

    if (!validTypes.includes(type)) {
        return res.status(400).json({ message: 'Invalid type' });
    }

    if (isNaN(limit) || limit <= 0) {
        return res.status(400).json({ message: 'Invalid limit' });
    }

    next();
};

module.exports = validateFilter;