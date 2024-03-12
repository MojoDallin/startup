const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public'));

let counter = 0;

app.get('/total-created-pages', (req, res) => {
  counter++;
  res.json({counter});
});

app.get('/total-created-pages-no-increment', (req, res) => {
  res.json({counter});
})


app.listen(port, () => {
  console.log(`Web service listening at port ${port}`);
});

app.use((req, res) => {
  res.sendFile('index.html', {root: './'})
})