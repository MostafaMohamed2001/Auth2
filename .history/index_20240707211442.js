const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth2Route');
const profileRoutes = require('./routes/profileRoute');
const passportSetup = require('./config/passport-setup');
const connectDB = require('./config/mongoose');

const app = express();

connectDB();

require('dotenv').config();

app.use(cookieParser());
  

// INIT PASS
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.get('/', (req, res) => {
  res.render('home');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
