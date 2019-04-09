const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
  _id: Number,
  username: {type: String, required:true},
  password: {type: String, required:true},
  firstName: String,
  lastName: String,
  gradYear: Number,
  scholarship: Number
}, {collection: 'student'});
module.exports = studentSchema;
