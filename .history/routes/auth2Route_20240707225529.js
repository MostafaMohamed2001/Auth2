const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy((err) => {
    if (err) {
      console.log('Error destroying session: ', err);
      return res.redirect('/'); // Optionally handle the error
    }
    res.clearCookie('connect.sid'); // Clear the connect.sid cookie
    res.clearCookie('token'); // Clear the JWT token cookie
    res.redirect('/');
  });
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile'],
  prompt: 'select_account'
}));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  const user = req.user;
  const token = jwt.sign({ id: user.id }, 832jiasdfasdhuohwefr2w3, { expiresIn: '1d' }); // Use environment variable for secret
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/profile/');
});

module.exports = router;
