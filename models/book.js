var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, default: 'Unknown'},
  description: {type: String}
},{
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);