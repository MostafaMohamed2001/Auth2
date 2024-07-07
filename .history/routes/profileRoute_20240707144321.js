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
res.render('profile', )
})

module.exports = router;


 