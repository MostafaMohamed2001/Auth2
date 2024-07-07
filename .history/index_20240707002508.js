const express = require('express');
const passport = require('passport');

const app = express();

app.set('view engine' ,)





app.get('/', () => {
  res.send('Hello World!');
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
