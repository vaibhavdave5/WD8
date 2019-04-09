const mongoose = require('mongoose')
const trueFalseSchema = require('./quiz-widget.schema.server')
module.exports = mongoose.model('QuizWidgetModel', trueFalseSchema)