const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy({
    callbackURL: "/auth/google/callback",
    clientID: '1003378862240-l8cjjal74nabsgfv5q9kg4ut9pfoifda.apps.googleusercontent.com',
    clientSecret: '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',

  }), (accessToken, refreshToken, profile, cb) => {
    // console.log("hello")
    return cb(err, profile);
  })
);
//   // Serialize user into the sessions
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// // Deserialize user from the sessions
// passport.deserializeUser((user, done) => {
//   done(null, user);
// });