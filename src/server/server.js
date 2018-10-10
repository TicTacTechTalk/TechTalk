// import dependencies
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const db = require('./models/connection.js');
const scraperController = require('./scraper')

// apply bodyParser and cookieParser at every route.
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/event', (req, res) => {
  const { name, location, time } = req.body;
  db.none('INSERT INTO events(name, location, time) VALUES($1, $2, $3)', [name, location, time])
    .then(() => {
      res.send('SUCCESS');
    })
    .catch((error) => {
      res.json(error);
    });
});

app.get('/builtinla', (req, res) => {
  scraperController.getBuiltInLa()
  .then(data => res.send(data))
});

app.get('/builtinny', (req, res) => {
  scraperController.getBuiltInNy()
  .then(data => res.send(data))
})

// initialize server at PORT 3000;
app.listen(3000, () => {
  console.log('Listening to live on port 3000!');
});
