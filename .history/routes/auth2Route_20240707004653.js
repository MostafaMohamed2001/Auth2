const router = express().Router();

router.get('/login', (req, res) => {
  res.render('login');
})


// auth handle

router.get('/google', (req, res) => {
  // handle with passport
  res.send('Logging in with google')
})

