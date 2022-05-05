import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ info }) => {
  // console.log(info)
  const { title, author, isbn, avg_rating, page_no } = info;

  const deleteBook = () => {
    const titleData = { title };
    console.log(titleData);
    fetch('api/delete/'+title, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
        body: JSON.stringify(titleData),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data after fetch request' + data);
      })
      .then(() => {
        props.history.push('/');
      })
      .catch((err) => console.log('DeleteCharacter /api/delete: ERROR: ', err));
  };

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
          <button type="button" className="bookAddlDetailsButton primaryButton">
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
