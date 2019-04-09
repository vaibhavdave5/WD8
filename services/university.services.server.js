const universityDao = require('../data/daos/university.dao.server')
module.exports = app => {
    createStudent = (req, res) =>
    res.json(universityDao.createStudent(req.body))

  app.post('/api/student/', createStudent)
}