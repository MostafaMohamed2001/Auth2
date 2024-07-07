const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport');
const authRoutes = require('./routes/auth2Route');
const passportSetup = require('./config/passport-setup')

const app = express();


app.set('view engine', 'ejs')


app.use('/auth' ,authRoutes)
app.get('/', (req,res) => {
  res.render('home');
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    