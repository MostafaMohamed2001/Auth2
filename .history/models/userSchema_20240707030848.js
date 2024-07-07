const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  username: String,
 google 

})  ;


 module.exports = mongoose.model('User' , userSchema)