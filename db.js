const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // We'll use a local MongoDB database named farmer-assist
    await mongoose.connect('mongodb://127.0.0.1:27017/farmer-assist');
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
