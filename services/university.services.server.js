const studentDao = require('../dao/student.dao.server')()
module.exports = app => {
    const createStudent = (req, res) =>
    res.json(studentDao.createStudent(req.body))

  app.post('/api/student/', createStudent)
}