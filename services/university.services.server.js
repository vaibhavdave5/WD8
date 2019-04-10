const universityDao = require('../data/daos/university.dao.server')
module.exports = app => {
    const createStudent = (req, res) =>
    res.json(universityDao.createStudent(req.body))

    const findAllStudents = (req, res) =>{
        universityDao.findAllStudents().then((students) => {
            if (students != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(students);
            }}
            )
    }

    const findStudentById = (req, res) => {
        universityDao.findStudentById(req.params['id']).then((students) => {
            if (students != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(students);
            }})
    }
    app.get('/api/student/:id', findStudentById);

    const updateStudentById = (req, res) => {
        universityDao.updateStudentById(req.params['id']).then((arr) => {
            if (arr != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(arr);
            }})
    }

    app.put('/api/student/:id', updateStudentById)

    const removeStudentById = (req, res) => {
        universityDao.removeStudentById(req.params['id']).then((arr) => {
            if (arr != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(arr);
            }});
    }

    app.delete('/api/student/:id', removeStudentById)

    const createQuestion = (req, res) => {
        universityDao.createQuestion(req.body).then((arr) => {
            if (arr != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(arr);
            }});
    }

    app.post('/api/question', createQuestion);

    const getAllQuestions = (req, res) => {
        universityDao.findAllQuestions().then((arr) => {
            if (arr != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(arr);
            }});
    }

    app.get('/api/question', getAllQuestions);

    const getQuestionById = (req, res) => {
        universityDao.findQuestionById(req.params['id']).then((arr) => {
            if (arr != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(arr);
            }});
    }

    app.get('/api/question/:id', getQuestionById);

    const updateQuestionById = (req, res) => {
        universityDao.updateQuestionById(req.params['id']).then((arr) => {
            if (arr != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(arr);
            }});
    }

    app.put('/api/question/:id', updateQuestionById)

    const removeQuestionById = (req, res) => {
        universityDao.removeQuestionById(req.params['id']).then((arr) => {
            if (arr != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(arr);
            }});
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