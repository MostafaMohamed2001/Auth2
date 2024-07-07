const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  username: String,
 googleId :  

})  ;


 module.exports = mongoose.model('User' , userSchema)