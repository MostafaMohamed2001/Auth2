const express = require('express');
const passport = require('passport');

const app = express();

app.set('view engine' ,'ejs')
var GoogleStrategy = require('passport-google-oauth20').Strategy;



app.get('/', () => {
  res.render('home');
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
