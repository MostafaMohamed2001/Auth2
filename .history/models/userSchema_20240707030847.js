const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  username: String,
 googl 

})  ;


 module.exports = mongoose.model('User' , userSchema)