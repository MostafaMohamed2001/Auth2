const express = require('express')
const router = express.Router();
const passport = require('passport');

app.get('/', (req, res) => {
  res.send('Yo')
})

module.exports = router;


 