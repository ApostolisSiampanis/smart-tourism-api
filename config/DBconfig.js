const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    try {
        const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=${process.env.MONGO_APP_NAME}`;

        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to DB:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;