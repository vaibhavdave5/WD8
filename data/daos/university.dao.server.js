const studentModel = require('../models/student.model.server')
const questionModel = require('../models/question.model.server')
const answerModel = require('../models/answer.modal.server')

module.exports = {
    createStudent,
    findAllAnswers,
    findAllStudents,
    findAnswerById,
    findStudentById,
    findAllQuestions,
    findQuestionById,
    findAnswersByStudent,
    findAnswersByQuestion  
  }

const createStudent = student =>
  studentModel.create(student)

const findAllStudents = () => {
    studentModel.find();
}  

const findStudentById = userId =>
  studentModel.findById(userId)

const findAllQuestions = () =>{
      questionModel.find();
}

const findQuestionById = id => {
    questionModel.findById(id)
}

const findAllAnswers = () =>{
    answerModel.find();
}
const findAnswerById = id => {
    answerModel.findById(id);
} 
  
const findAnswersByStudent = (studentId) => {
    answerModel.findAnswersByStudent(studentId)
} 
const findAnswersByQuestion = (questionId) =>{
    questionModel.findAnswersByQuestion(questionId);  
} 
  

