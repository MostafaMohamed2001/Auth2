const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./../models/userSchema')
passport.use(
  new GoogleStrategy({
    callbackURL: "/auth/google/callback",
    clientID: '1003378862240-l8cjjal74nabsgfv5q9kg4ut9pfoifda.apps.googleusercontent.com',
    clientSecret: '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',
  }, (accessToken, refreshToken, profile, cb) => {
    User.findOrCreate({ googleId: profile.id , name:profile }, function (err, user) {
      return cb(err, user);
    });
    console.log("Callback func fire")
    console.log(profile)
  })
);
