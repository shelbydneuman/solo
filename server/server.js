const express = require('express');
const path = require('path');
// Creating an express object
const app = express();
const bookRouter = require('./bookRouter');
//Port Number
const PORT = 3000;
// Dotenv is a module that loads variables from a .env file into a process.env object, allowing sensitive information to be stored in a separate environment from the code.
// require('dotenv').config();
// // give ability to access url in the .env file
// const connectionString = process.env.CONNECTION_STRING;
// // pg-promise: allows automatic connections, transactions, and queries between app and db
// // load and initialize pg-promise library
// const pgp = require('pg-promise')();
// // create database object
// const db = pgp(connectionString);

// handle parsing body requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// define route handlers
app.use('/api', bookRouter);

// catch-all route handler for requests to unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);


// Express Error Handler
// @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;
