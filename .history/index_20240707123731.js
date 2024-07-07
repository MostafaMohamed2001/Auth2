const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session')


const authRoutes = require('./routes/auth2Route');
const passportSetup = require('./config/passport-setup')
const connectDB = require('./config/mongoose'); // Import the connectDB function


const app = express();

app.use(cookieSession)

app.set('view engine', 'ejs')

app.use()

app.use('/auth' ,authRoutes)
app.get('/', (req, res) => {
  res.render('home');
});

connectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    