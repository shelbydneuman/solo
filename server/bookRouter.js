const express = require('express');
const bookController = require('./controller');
const router = express.Router();

// load all books
router.get('/', bookController.getBooks, (req, res) => {
  res.status(200).json(res.locals.books);
  // res.status(200).json({test:'help!'})
});

// add a new book
router.post('/add', bookController.addBook, (req, res) => {
  res.status(200).json(res.locals.addedBook);
});

// delete a book
// delete a book
router.delete('/delete/:id', bookController.deleteBook, (req, res) => {
  console.log('delete book router!');
  res.status(200).json(res.locals.deletedBook);
});

module.exports = router;
