const mongoose = require('mongoose')
const trueFalseSchema = require('./question.schema.server')
module.exports = mongoose.model('QuestionModel', trueFalseSchema)