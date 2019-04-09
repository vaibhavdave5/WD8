const mongoose = require('mongoose')
const trueFalseSchema = require('./true-false.schema.server')
module.exports = mongoose.model('TrueFalseSchema', trueFalseSchema)