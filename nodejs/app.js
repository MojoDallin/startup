const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('C:/Users/dalli/OneDrive/Desktop/School/CS260/startup'));


app.listen(port, () => {
  console.log(`Web service listening at port ${port}`);
});