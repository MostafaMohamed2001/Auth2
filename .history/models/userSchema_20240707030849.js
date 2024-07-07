const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  username: String,
 googleI 

})  ;


 module.exports = mongoose.model('User' , userSchema)