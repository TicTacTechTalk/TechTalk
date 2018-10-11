var bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const db = require('../models/connection.js');

module.exports = {
  hashPassword: (req, res, next) => {
    res.locals.hash = bcrypt.hashSync(req.body.password, salt);
    next()
  },

  comparePassword: (req, res, next) =>
    db.any('SELECT * FROM "user" WHERE username = $1', [req.body.username])
    .then(function (user) {
      bcrypt.compare(req.body.password, user.password, function (err, bool) {
        res.locals.bool = bool;
        next();
      }
      )}
    )
    .catch(function (error) {
      next();
    })
}
