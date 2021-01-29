var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, default: 'Unknown'},
  description: { type: String },
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
},{
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);