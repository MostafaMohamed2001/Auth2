const express = require('express');
const passport = require('passport');

const app = express();


app.set('views engine', '')

app.get('/', (req,res) => {
  res.render('home');
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
