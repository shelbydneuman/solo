import React from 'react';

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
    </article>
  );
};

export default BookCard;
