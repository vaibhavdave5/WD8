const universityDao = require('../data/daos/university.dao.server')
module.exports = app => {
    const createStudent = (req, res) =>
    res.json(universityDao.createStudent(req.body))

    const findAllStudents = (req, res) =>
    res.json(universityDao.findStudents())

    const findStudentById = (req, res) => {
        res.json(universityDao.findStudentById(req.params['id']))
    }
    app.get('/api/student/:id', findStudentById);

    const updateStudentById = (req, res) => {
        res.json(universityDao.updateStudentById(req.params['id']))
    }

    app.put('/api/student/:id', updateStudentById)

    const removeStudentById = (req, res) => {
        res.json(universityDao.removeStudentById(req.params['id']));
    }

    app.delete('/api/student/:id', removeStudentById)

    const createQuestion = (req, res) => {
        res.json(universityDao.createQuestion(req.body));
    }

    app.post('/api/question', createQuestion);

    const getAllQuestions = (req, res) => {
        res.json(universityDao.findAllQuestions());
    }

    app.get('/api/question', getAllQuestions);

    const getQuestionById = (req, res) => {
        res.json(universityDao.findQuestionById(req.params['id']));
    }

    app.get('/api/question/:id', getQuestionById);

    const updateQuestionById = (req, res) => {
        res.json(universityDao.updateQuestionById(req.params['id']));
    }

    app.put('/api/question/:id', updateQuestionById)

    const removeQuestionById = (req, res) => {
        res.json(universityDao.removeQuestionById(req.params['id']));
    }

    app.delete('/api/question/:id', removeQuestionById)

// /api/student/:sid/question/:qid/answer
// Student whose ID is sid answers question whose ID is qid
// /api/student/:sid/question/:qid/answer
// Retrieves all answers by student whose ID is sid for question whose ID is qid
// /api/question/:qid/student/:sid/answer
// Retrieves all answers by student whose ID is sid for question whose ID is qid (same as above)


  app.post('/api/student/', createStudent)
  app.get('/api/student/', findAllStudents)
  
}