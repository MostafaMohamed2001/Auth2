const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./../models/userSchema');

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id).then((user) => {
    cb(null, user);
  }).catch(err => cb(err));
});

passport.use(
  new GoogleStrategy({
    callbackURL: '/auth/google/callback',
    clientID:'1003378862240-l8cjjal74nabsgfv5q9kg4ut9pfoifda.apps.googleusercontent.com', // Use environment variables
    clientSecret: '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', // Use environment variables
  }, async (accessToken, refreshToken, profile, cb) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (user) {
        console.log('User already exists' + user);
      } else {
        user = await User.create({
          googleId: profile.id,
          username: profile._json.name,
          image: profile._json.picture
        });
        console.log('New user created: ' + user);
      }
      user.token = accessToken; // Ensure token is attached to user object .
      cb(null, user);
    } catch (err) {
      console.log(err);
      cb(err, null);
    }
  })
);
