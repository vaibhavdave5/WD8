module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'white-board';
    var connectionString = 'mongodb+srv://vd:vd@cluster0-2wyvz.mongodb.net/test?retryWrites=true';
    connectionString += databaseName;
    mongoose.connect(connectionString);
  };
  