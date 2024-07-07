const mongoose = require('mongoose');

const connectDB = async () => {
 

    await mongoose.connect('mongodb+srv://mostafabusnins8828:MGFG1fZ7KhUapndR@cluster0.5kywrxu.mongodb.net/authGoogle?retryWrites=true&w=majority').then((conn) => {
      console.log(`Connected to DB => ${conn.connection.name}`);
      console.log(`Connected to DB on host => ${conn.connection.host}`);
    }).catch((err) => {
      console.error(`Error connecting to DB ${err}`);
      process.exit(1);
    });
  }

module.exports = connectDB;
