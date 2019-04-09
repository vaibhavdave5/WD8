const studentModel = require('../models/student.model.server')

const createStudent = student =>
  studentModel.save(student)


module.exports = {
  createStudent
}