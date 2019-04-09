const mongoose = require('mongoose')
const trueFalseSchema = require('./student.schema.server')
module.exports = mongoose.model('StudentSchema', trueFalseSchema)