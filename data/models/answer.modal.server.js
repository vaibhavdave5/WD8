const mongoose = require('mongoose')
const trueFalseSchema = require('./answers.schema.server')
module.exports = mongoose.model('AnswerModel', trueFalseSchema)