var mongoose = require('mongoose');

const studentModel = require('../models/student.model.server')
const questionModel = require('../models/question.model.server')
const answerModel = require('../models/answer.modal.server')


const createQuestion = (question) =>
    questionModel.create(question);


const answerQuestion  = (studentId, questionId, answer) => 
    answerModel.create(answer)


const answerQuestion2  = (answer) => 
    answerModel.create(answer)


const createStudent = student =>
  studentModel.create(student)

const findAllStudents = () => studentModel.find()

const findStudentById = userId =>
  studentModel.findById(userId)

const findAllQuestions = () =>
      questionModel.find();


const findQuestionById = id => 
    questionModel.findById(id)


const findAllAnswers = () =>
    answerModel.find();

const findAnswerById = id => 
    answerModel.findById(id);
 
  
const findAnswersByStudent = (studentId) => 
    answerModel.findAnswersByStudent(studentId)

const findAnswersByQuestion = (questionId) =>
    questionModel.findAnswersByQuestion(questionId);  
 

const updateStudent = (id, student) => 
    studentModel.update({_id: id}, {$set: student})


const deleteStudent = (id) => 
    studentModel.remove({_id: id})

const findAnswersByStudentAndQuestion = (qid,sid) => 
    answerModel.find({student: sid, question: qid })
    .populate("student")

const removeAllStudents = () => 
    studentModel.collection.remove();


const removeAllAnswers = () => 
    answerModel.collection.remove();
 


const removeAllQuestions = () => 
    questionModel.collection.remove();



module.exports = {
    removeAllAnswers,
    removeAllQuestions,
    removeAllStudents,
    createStudent,
    findAllAnswers,
    findAllStudents,
    findAnswerById,
    findStudentById,
    findAllQuestions,
    findQuestionById,
    findAnswersByStudent,
    findAnswersByQuestion,
    updateStudent,
    deleteStudent,
    createQuestion,
    answerQuestion,
    answerQuestion2,
    findAnswersByStudentAndQuestion
  }
  

