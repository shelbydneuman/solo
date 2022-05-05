import React from 'react';
import { Link } from 'react-router-dom';

// router.delete('/books/:title', async (req, res) => {
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

 const deleteBook = ({info}) => {
   const { title } = info;
   fetch('/api/delete', {
     method: 'DELETE',
     headers: {
       'Content-Type': 'Application/JSON',
     },
     body: JSON.stringify(title),
   })
     .then((resp) => resp.json())
     .then((data) => {
       console.log(data);
     })
     .then(() => {
       props.history.push('/');
     })
     .catch((err) =>
       console.log('DeleteCharacter /api/delete: ERROR: ', err)
     );
 };



const BookCard = ({ info }) => {
  const { title, author, isbn, avg_rating, page_no } = info;
    
    return (
      <article className="card bookCard">
        <div className="bookHeadContainer">
          <h3 className="bookName">{title}</h3>
        </div>
        <ul className="bookDetailsList">
          <li className="bookDetail">Author: {author}</li>
          <li className="bookDetail">ISBN: {isbn} </li>
          <li className="bookDetail">Average Rating: {avg_rating}</li>
          <li className="bookDetail">Number of Pages: {page_no}</li>
        </ul>
        <div className="charBtnOptions">
          <Link to={'/create'}>
            <button
              type="button"
              className="bookAddlDetailsButton primaryButton"
            >
              Place A Hold
            </button>
          </Link>
        </div>
        <div className="charBtnOptions">
            <button
              type="button"
              className="bookAddlDetailsButton primaryButton"
              onClick={deleteBook}
            >
              Delete From My List
            </button>
        </div>
      </article>
    );
};

export default BookCard;
