const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

passport.use(
  new GoogleStrategy({
    clientID:'',
    clientSecret: '',
    callbackURL: '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'
  }), () => {
    // handle cb func
  }
)