const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('./../models/userSchema');

const authCheck = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect('/auth/login');
  }

  try {
    const decoded = jwt.verify(token,'8rwehoriewrweca'); // Use environment variable for secret
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.redirect('/auth/login');
    }
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.redirect('/auth/login');
  }
};

router.get('/', authCheck, (req, res) => {
  res.render('profile', {
    user: req.user
  });
});

module.exports = router;