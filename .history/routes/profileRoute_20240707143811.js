const express = require('express')
const router = express.Router();
const passport = require('passport');

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect('/auth/login')
  } else {
    next();
  }
}


router.get('/', authCheck, (req, res) => {
  console.log(req.p)
  res.send('You are logged in , this is your profile - ' + req.user.username)
})

module.exports = router;


 