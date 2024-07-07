const mongoose = require('mongoose');

const connectDB = async () => {
  
    await mongoose.connect('mongodb://localhost:27017/authGoogle')
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

module.exports = connectDB;
