const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy({
    clientID: '1003378862240-l8cjjal74nabsgfv5q9kg4ut9pfoifda.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:8000/auth/google/callback",
  }, (accessToken, refreshToken, profile, cb) => {
    // Here you would typically find or create a user in your database
    // For now, we just return the profile
    return cb(null, profile);
  })
);
