const express = require('express')
const router = express.Router();
const passport = require('pa')
router.get('/login', (req, res) => {
  res.render('login');
})

router.get('/logout', (req, res) => {
  // handle with passport
  res.send('Logging out')
})



router.get('/google', )


module.exports = router;


