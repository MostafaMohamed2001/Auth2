const express = require('express')
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('login');
})

router.get('/logout', (req, res) => {
  // handle with passport
  req.logout();
  reas
})



router.get('/google', passport.authenticate("google", {
  scope:['profile']
}) )

// router for redirect for google

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
 res.redirect('/profile/')
 
})

module.exports = router;


 