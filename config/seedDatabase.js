const fs = require('fs');
const path = require('path');
const Country = require('../models/Country');

const seedDatabase = async () => {
    try {
        const countryCount = await Country.countDocuments();
        if (countryCount === 0) {
            const dataPath = path.join(__dirname, '../data/Merged_Country_Data.json');
            const jsonData = fs.readFileSync(dataPath, 'utf-8');
            const countries = JSON.parse(jsonData);

            await Country.insertMany(countries);
            console.log('Database seeded successfully');
        } else {
            console.log('Database already contains data, skipping seeding.');
        }
    } catch (err) {
        console.error('Error seeding database:', err);
    }
};

module.exports = seedDatabase;