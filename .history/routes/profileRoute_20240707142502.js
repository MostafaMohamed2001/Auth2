const express = require('express')
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
  res.send('You are logged in , this is your profile - ')
})

module.exports = router;


 