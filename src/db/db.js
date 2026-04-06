const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.Mongoose_uri;
        if (!uri || typeof uri !== 'string') {
            throw new Error('Mongoose connection string is missing or invalid. Set Mongoose_uri in .env');
        }
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err.message || err);
        process.exit(1);
    }
}

module.exports = connectDB;
