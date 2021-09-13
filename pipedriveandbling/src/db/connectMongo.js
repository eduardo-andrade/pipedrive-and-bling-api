const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://test:rGOj1iUbUHOKKDhR@cluster0.fqj9i.mongodb.net/pipedrive?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true,})
  .then((data) => {
    return ('Database connection success', data.connection.readyState);
  })
  .catch((err) => {return ('Database wont connected', err)});

mongoose.Promise = global.Promise;
const database = mongoose.connection;
module.exports = database;