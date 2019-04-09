const mongoose = require('mongoose')
const trueFalseSchema = require('./multiple-choice.schema.server')
module.exports = mongoose.model('MultipleChoiceSchema', trueFalseSchema)