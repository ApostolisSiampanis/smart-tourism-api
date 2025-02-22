const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
const connectDB = require('./config/DBconfig');
const seedDatabase = require('./config/seedDatabase');

const port = process.env.PORT;

connectDB().then(async () => {
    await seedDatabase();
});

// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});