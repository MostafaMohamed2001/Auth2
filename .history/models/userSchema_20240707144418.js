const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  username: String,
  googleId: String,
  image:St

});


const User = mongoose.model('User', userSchema);
module.exports = User;