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
})

// delete a book
// router.delete('/delete', bookController.deleteBook, (req, res) => {
//   try {
//     const { title } = req.params;
//     const deleteBook = await db.query('DELETE FROM books WHERE title = $1', [
//       title,
//     ]);
//     return res.status(200).json('Book was deleted!');
//   } catch (err) {
//     console.error(err.message);
//   }
// });
module.exports = router;
