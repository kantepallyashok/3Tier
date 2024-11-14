const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));  // Assuming static files are in 'public' folder

app.listen(port, () => {
  console.log(`Frontend app listening at http://localhost:${port}`);
});
