const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  username: String,
 googleId : Str 

})  ;


 module.exports = mongoose.model('User' , userSchema)