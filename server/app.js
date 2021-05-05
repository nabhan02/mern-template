const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;

//single page

let game0= {title:"game0" , genre: "Action", rating: 5, link: "url", image:"image.png", description:"game" }
let game1= {title:"game1" , genre: "Mystery", rating: 1, link: "url", image:"image.png", description:"game" }
let game2= {title:"game2" , genre: "Sci-Fi", rating: 10, link: "url", image:"image.png", description:"game" }
let game3= {title:"game3" , genre: "Fantasy", rating: 7, link: "url", image:"image.png", description:"game" }

let gameList = {0: game0, 1: game1, 2: game2, 3: game3 }

router.get('/single', function (res,req){ //request route?
  res.send()      //send a random game here?
})

//need to make few routes
//two seperate routes or 1 route that reads the query parameter 
//fugure out if you want to split it into one route
//to click on game in multi page, might need to get game by id
//