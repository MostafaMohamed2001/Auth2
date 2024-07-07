const express = require('express');

const passport = require('passport');

const authRoutes = require('./routes/auth-routes')
const app = express();


app.set('view engine', 'ejs')

app.get('/', (req,res) => {
  res.render('home');
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  