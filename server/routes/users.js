const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = {
    name: 'ACM Hack',
    email: 'hack@acmucsd.org'
  }
  res.status(200).json({ user });
});

module.exports = router;

const csv = require('csv-parser')
const fs = require('fs')
const games = [];
fs.createReadStream('GameDataCSV - Sheet1.csv')
  .pipe(csv({}))
  .on('data',(data) => games.push(data))
  .on('end',() => {
  console.log(games)
  })