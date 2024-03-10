const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./'));

let counter = 0;

app.get('/total-created-pages', (req, res) => {
  counter++;
  res.json({counter});
});


app.listen(port, () => {
  console.log(`Web service listening at port ${port}`);
});