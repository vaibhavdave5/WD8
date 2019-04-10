const mongoose = require('mongoose');
const trueFalseSchema = mongoose.Schema({
  choice: String,
  correct: Number
}, {collection: 'trueFalse'});
module.exports = trueFalseSchema;
