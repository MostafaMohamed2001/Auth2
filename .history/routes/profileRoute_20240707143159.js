const express = require('express')
const router = express.Router();
const passport = require('passport');

const authCheck = (req, res, next) => {
  if
}


router.get('/', (req, res) => {
  res.send('You are logged in , this is your profile - ' + req.user.username)
})

module.exports = router;


 