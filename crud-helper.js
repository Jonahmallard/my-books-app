// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Book = require('./models/book');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy
let u, i, c, o;