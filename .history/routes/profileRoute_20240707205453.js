const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('./../models/userSchema'); // Assuming you have a User model to find the user by token

const authCheck = async (req, res, next) => {
  const token = req.cookies.token; // Extract the token from the cookie
  if (!token) {
    return res.redirect('/auth/login');
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Verify the token with your JWT secret
    const user = await User.findById(decoded.id); // Find the user by the decoded id
    if (!user) {
      return res.redirect('/auth/login');
    }
    req.user = user; // Attach the user to the request object
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
