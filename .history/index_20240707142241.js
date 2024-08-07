const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session')

const authRoutes = require('./routes/auth2Route');
const profileRoutes = require('./routes/profileRoute');
const passportSetup = require('./config/passport-setup')
const connectDB = require('./config/mongoose'); // Import the connectDB function


const app = express();

connectDB();

require('dotenv').config()
app.use(cookieSession({
  name: 'session',
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['kfdspkfopdskopfkdsop']
}));

// INIT PASS

app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs')



app.use('/auth' ,authRoutes)
app.use('/profile' ,pro)
app.get('/', (req, res) => {
  res.render('home');
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    