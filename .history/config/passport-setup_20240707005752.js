const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

passport.use(
  new GoogleStrategy({
    clientID:'',
    clientSecret: '',
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }), () => {
    // handle cb func
  }
)