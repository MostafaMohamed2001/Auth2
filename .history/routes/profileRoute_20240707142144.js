const express = require('express')
const router = express.Router();
const passport = require('passport');

app.get('/', (req, res) => {
  res.send('You are logged in')
})

module.exports = router;


 