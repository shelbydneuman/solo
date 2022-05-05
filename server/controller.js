const db = require('./models');

const bookController = {};

// write and send a query to grab all columns from the books table
bookController.getBooks = async (req, res, next) => {
  // const query = {
  //   text: `SELECT * FROM books`,
  // };
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

//  try {
//    const allBooks = await db.query('SELECT * FROM books');
//    return res.status(200).json(allBooks.rows[0]);
//  } catch (error) {
//    console.error(err.message);
//  }

module.exports = bookController;
