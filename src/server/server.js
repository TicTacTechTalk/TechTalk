// import dependencies
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const db = require('./models/connection.js');
const scraperController = require('./scraper')
const CORS = require('cors')

// apply bodyParser and cookieParser at every route.
app.use(bodyParser.json());
app.use(cookieParser());
app.use(CORS());

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

app.post('/addUser', (req, res) => {
  console.log('REQ BODY ===>', req.body)
  const { username, password } = req.body;
  //TODO add bCrypt
  db.query('INSERT INTO user(username, password) VALUES($1, $2)', [username, password])
    .then(yeet => {
      console.log('YEET')
      return res.status(200);
    })
    .catch((error) => {
      res.json(error);
    });
})

// '/Login'

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
