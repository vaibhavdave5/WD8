const studentModel = require('../models/student.model.server')

const createStudent = student =>
  studentModel.create(student)


module.exports = {
  createStudent
}