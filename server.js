var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')

var app = express();

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'any string'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./data/db')()

// const userDao = require('./dao/user.dao.server')

// const sectionDao = require('./dao/section.dao.server');
// const enrollmentDao = require('./dao/enrollment.dao.server')
// enrollmentDao.
//   enrollStudentIntoSection('5bf34e0a0eada8ea44044b05', '5bf35ff7fa839540015cf0bd')
//   .then(e => console.log(e))

// enrollmentDao.studentEnrollments('5bf34e0a0eada8ea44044b05')
//   .then(e => console.log(e))

require('./services/session.service.server')(app)

const universityService = require('./services/university.services.server')
universityService(app)

app.listen(3000);