const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./../models/userSchema')
passport.use(
  new GoogleStrategy({
    callbackURL: "/auth/google/callback",
    clientID: '1003378862240-l8cjjal74nabsgfv5q9kg4ut9pfoifda.apps.googleusercontent.com',
    clientSecret: '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',
  }, (accessToken, refreshToken, profile, cb) => {
    
    User.findOne({ googleId: profile.id }, (err, user) => {
      if (err) { return cb(err); }
      if (user) { return cb(null, user); }
      new User({ googleId: profile.id, username: profile._json.name }).save((err, user) => {
        if (err) { return cb(err); }
        return cb(null, user);
      });
    });


    User.create({ googleId: profile.id, username: profile._json.name }).then((user) => {
      
      console.log("new user created" + user)
    }).catch((err) => {
      console.log(err)
    })
    console.log("-----_______---------______-----_______----____")
    console.log(profile)
  })
);
