const db = require('./models');

const bookController = {};

// write and send a query to grab all columns from the books table
bookController.getBooks = async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM books');
    res.locals.books = result.rows;
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: 'An error occured in the CONTROLLER - get books query',
    });
  }
};

// post a new book to the database
bookController.addBook = async (req, res, next) => {
  console.log(req.body);
  try {
    const { title, author, isbn, avg_rating, page_no } = req.body;
    const newBook = await db.query(
      'INSERT INTO books (title, author, isbn, avg_rating, page_no) VALUES ($1, $2, $3, $4, $5)',
      [title, author, isbn, avg_rating, page_no]
    );
    res.locals.addedBook = newBook;
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: 'An error occured in the CONTROLLER - get books query',
    });
  }
};

// delete a book from the database
bookController.deleteBook = async (req, res, next) => {
  console.log('delete book controller!!!')
  // const bookTitle = req.params.id;
  console.log('req.params ' + req.params.id)
   try {
     const bookTitle = req.params.id;
     const deleteBook = await db.query(
       'DELETE FROM books WHERE title = VALUES ($1)', [bookTitle];
     );
     res.locals.deletedBook = deleteBook;
     return next();
   } catch (err) {
     console.log(err);
     return next({
       log: 'An error occured in the CONTROLLER - delete books query',
     });
   }
}

module.exports = bookController;
