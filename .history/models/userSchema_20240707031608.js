const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  username: String,
  googleId : String 

});


const = mongoose.model('User' , userSchema)