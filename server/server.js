// import dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// apply bodyParser and cookieParser at every route.
app.use(bodyParser.json());
app.use(cookieParser);

// initialize server at PORT 3000;
app.listen(3000, () => {
  console.log('Listening to live on port 3000!');
});