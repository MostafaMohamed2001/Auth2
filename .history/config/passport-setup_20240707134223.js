const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./../models/userSchema')

passport.serializeUser((user, done) => {
  done(null, user.id); 
});

passport.deserializeUser((id, docbne) => {
  User.findById(id).then((user) => {
    cb(null, user);
  });
});

passport.use(
  new GoogleStrategy({
    callbackURL: "/auth/google/callback",
    clientID: '1003378862240-l8cjjal74nabsgfv5q9kg4ut9pfoifda.apps.googleusercontent.com',
    clientSecret: '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',
  }, async (accessToken, refreshToken, profile, cb) => {
    try {
      const user = await User.findOne({ googleId: profile.id });
      if (user) {
        console.log('User already exists');
        cb(null, user);
      } else {
        const newUser = await User.create({ googleId: profile.id, username: profile._json.name });
        console.log("New user created: " + newUser);
        cb(null, newUser);
      }
    } catch (err) {
      console.log(err);
      cb(err, null);
    }
  })
);