const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

passport.use(
  new GoogleStrategy({
    clientID:'',
    clientSecret: '1003378862240-l8cjjal74nabsgfv5q9kg4ut9pfoifda.apps.googleusercontent.com',
    callbackURL: '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'
  }), () => {
    // handle cb func
  }
)