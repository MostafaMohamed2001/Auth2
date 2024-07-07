const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./../models/userSchema')

passport.serializeUser((user, done) => {
  done(null, user._id); 
})

passport.use(
  new GoogleStrategy({
    callbackURL: "/auth/google/callback",
    clientID: '1003378862240-l8cjjal74nabsgfv5q9kg4ut9pfoifda.apps.googleusercontent.com',
    clientSecret: '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',
  }, async (accessToken, refreshToken, profile, done) => {
    
    const user = await User.findOne({ googleId: profile.id });
    if (user) {
      console.log('Usre already Exist')
      done(null , user)
    } else {
      User.create({ googleId: profile.id, username: profile._json.name }).then((user) => {
      
        console.log("new user created" + user)
        
      }).catch((err) => {
        console.log(err)
      })
    }


   
    console.log("-----_______---------______-----_______----____")
    console.log(profile)
  })
);
