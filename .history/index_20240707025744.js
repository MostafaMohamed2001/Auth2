const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport');
const authRoutes = require('./routes/auth2Route');
const passportSetup = require('./config/passport-setup')

const app = express();
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/authGoogle', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

app.set('view engine', 'ejs')


app.use('/auth' ,authRoutes)
app.get('/', (req,res) => {
  res.render('home');
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    