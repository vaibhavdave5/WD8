const universityDao = require('../data/daos/university.dao.server')
var mongoose = require('mongoose');

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
  

  const getAnswersByStudentAndQuestion = (req, res) => {
    universityDao.findAnswersByStudentAndQuestion(req.params['qid'],req.params['sid']).then((arr) => {
        if (arr != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(arr);
        }});
    }

    app.get('/api/student/:sid/question/:qid/answer', getAnswersByStudentAndQuestion)

// Retrieves all answers by student whose ID is sid for question whose ID is qid
// /api/question/:qid/student/:sid/answer
// Retrieves all answers by student whose ID is sid for question whose ID is qid (same as above)


  app.post('/api/student/', createStudent)
  app.get('/api/student/', findAllStudents)


  const obj1 = {
    _id:123,
    username: "Alice",
    password: "Wonderland",
    firstName: "Alice",
    lastName: "Alice",
    gradYear: 2020,
    scholarship: 15000
}

const obj2 = {
    _id:234,
    username: "Bob",
    password: "Hope",
    firstName: "bob",
    lastName: "bob",
    gradYear: 2021,
    scholarship: 12000
}

const q11 = {
    isTrue: true
}
const q1 = {
    
  _id:321,
   question: "Is the following schema valid?",
   points: 10,
   questionType: "TRUE_FALSE",  
   trueFalse: q11
}


const q12 = {
    isTrue: false
}

const q2 = {
    
  _id : 432,
   question: "DAO stands for Dynamic Access Object",
   points: 10,
   questionType: "TRUE_FALSE",  
   trueFalse: q12
}

const q13 = {
    choice: "Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations",
    correct:1
}

const q3 = {
    
  _id : 543,
   question: "What does JPA stand for?",
   points: 10,
   questionType: "MULTIPLE_CHOICE",  
   multipleChoice: q13
}

const q14 = {
    choice: "Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping",
    correct:4
}

const q4 = {
    
  _id : 654,
   question: "What does ORM stand for?",
   points: 10,
   questionType: "MULTIPLE_CHOICE",  
   multipleChoice: q14
}

const a1 = {
    _id: 123,
    student:123,
    question:321,
    trueFalseAnswer:true    
}
// const a2 = {
//     _id: 234,
//     student:obj1,
//     question:q2,
//     trueFalseAnswer:false  
// }

// const a3 = {
//     _id: 345,
//     student:obj1,
//     question:q3,
//     multipleChoiceAnswer:1  
// }

// const a4 = {
//     _id: 456,
//     student: obj1,
//     question: q4,
//     multipleChoiceAnswer:2
// }

// const a5 = {
//     _id: 567,
//     student:obj2,
//     question:q1,
//     trueFalseAnswer:false    
// }
// const a6 = {
//     _id: 678,
//     student:obj2,
//     question:q2,
//     trueFalseAnswer:true 
// }

// const a7 = {
//     _id: 789,
//     student:obj2,
//     question:q3,
//     multipleChoiceAnswer:3
// }

// const a8 = {
//     _id: 890,
//     student: obj2,
//     question: q4,
//     multipleChoiceAnswer:4
// }

app.post('/api/populate', (req, res) => {
    //  universityDao.createStudent(obj1).then((res1) =>{
    //         universityDao.createQuestion(q1)
    //         universityDao.createQuestion(q2)
    //         universityDao.createQuestion(q3)
    //         universityDao.createQuestion(q4)
    //     universityDao.createStudent(obj2).then((res2)=>{
    //         res.statusCode = 200;
    //         res.setHeader('Content-Type', 'application/json');
    //         res.json(res1+res2);
    //     })}
    //     ).then((res3) => {
            universityDao.answerQuestion2(a1)
            // universityDao.answerQuestion2(a2)
            // universityDao.answerQuestion2(a3)
            // universityDao.answerQuestion2(a4)
            // universityDao.answerQuestion2(a5)
            // universityDao.answerQuestion2(a6)
            // universityDao.answerQuestion2(a7)
            // universityDao.answerQuestion2(a8)
        // }) 
    
  })  

  
}