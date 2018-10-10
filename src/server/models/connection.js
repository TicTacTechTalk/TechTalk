const pgp = require('pg-promise')();
const db = pgp('postgres://ljzlbbdu:2YHz4McWHEUz-4P12xUCnjdKkcC9VB6W@stampy.db.elephantsql.com:5432/ljzlbbdu');

module.exports = db;

