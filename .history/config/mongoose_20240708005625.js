const mongoose = require('mongoose');

const connectDB = async () => {
  
    await mongoose.connect('mongodb://localhost:27017/authGoogle').then((conn) => {
      console.log(`Connected to DB => ${conn.connection.name}`);
      console.log(`Connected to DB on host => ${conn.connection.host}`);
    }).catch((err) => {
      console.error(`Error connecting to DB ${err}`);
      process.exit(1);
    });
  }

module.exports = connectDB;
DB_URI=