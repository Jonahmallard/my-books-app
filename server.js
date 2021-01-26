const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// npm i bcrypt dotenv morgan express mongoose serve-favicon react-router-dom jsonwebtoken

// Always require and configure near the top 
require('dotenv').config();

// Connect to the database
require('./config/database');

var booksRouter = require("./routes/api/books");
var usersRouter = require('./routes/api/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', usersRouter);

// Protect the api routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use("/api/books", booksRouter);
// app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
// app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});