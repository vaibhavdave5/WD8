const universityDao = require('../data/daos/university.dao.server')
module.exports = app => {
    const createStudent = (req, res) =>
    res.json(universityDao.createStudent(req.body))

    const findAllStudents = (req, res) =>
    res.json(universityDao.findStudents())

  app.post('/api/student/', createStudent)
  app.get('/api/student/', findAllStudents)
}