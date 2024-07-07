const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.clearCookie('token');
  res.redirect('/');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  const user = req.user;
  const token = jwt.sign({ id: user.id }, "8rwehori", { expiresIn: '1d' }); // Use environment variable for secret
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/profile/');
});

module.exports = router;
