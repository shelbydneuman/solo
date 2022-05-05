const express = require('express');

const bookController = require('./controller');

const router = express.Router();

// load all books
router.get('/', bookController.getBooks, (req, res) => {
  res.status(200).json(res.locals.books);
  // res.status(200).json({test:'help!'})
});

// post a new book
// app.post('/add', async (req, res) => {
//   try {
//     const { description } = req.body;
//     const newTodo = await db.query(
//       'INSERT INTO books (columns) VALUES($1) RETURNING *',
//       [description]
//     );
//     return res.status(200).json(newTodo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// delete a book
// app.delete('/books/:title', async (req, res) => {
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
