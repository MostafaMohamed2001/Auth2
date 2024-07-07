const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  username: String,
  googleId: String,
  im

});


const User = mongoose.model('User', userSchema);
module.exports = User;