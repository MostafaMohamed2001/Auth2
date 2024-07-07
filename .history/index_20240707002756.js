const express = require('express');
const passport = require('passport');

const app = express();

app.set('view engine' ,'ejs')
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '1003378862240-l8cjjal74nabsgfv5q9kg4ut9pfoifda.apps.googleusercontent.com',
    clientSecret: '',
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));




app.get('/', () => {
  res.render('home');
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
