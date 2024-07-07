const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.clearCookie('token'); // Clear the token cookie on logout
  res.redirect('/');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  // Store the token in a cookie
  const token = req.user.token; // Assuming `token` is available on the user object
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/profile/');
});

module.exports = router;
