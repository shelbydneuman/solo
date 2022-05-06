import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ info, props }) => {
  // console.log(info)
  const { title, author, isbn, avg_rating, page_no } = info;

  const deleteBook = (props) => {
    const titleData = { title };
    console.log(titleData);
    fetch('api/delete/' + title, {
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
        console.log(props.history);
        props.history.push('/');
      })
      .catch((err) => console.log('DeleteCharacter /api/delete: ERROR: ', err));
  };

  const placeHold = () => {
    const isbnNo = { isbn };
    fetch(
      'https://www.googleapis.com/books/v1/volumes?q=' +
        isbn +
        '&key=AIzaSyAxM24Ar7W49pTDEyCQrq7Vhj4j3LWv4ak',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          body: JSON.stringify(isbnNo),
          mode: 'no-cors'
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log('getDetails: ERROR: ', err));
  };

  //         // const updatedCharacter = { ...character };
  //         // updatedCharacter.moreInfo = {};
  //         // updatedCharacter.moreInfo.homeworld = data.homeworld;
  //         // updatedCharacter.moreInfo.films = data.films;
  //         // this.props.updateCharacter(character.id, updatedCharacter);
  //       })

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
        <Link to={'/placeahold'}>
          <button
            type="button"
            className="bookAddlDetailsButton primaryButton"
            onClick={placeHold}
          >
            Place A Hold
          </button>
        </Link>
      </div>
      <div className="charBtnOptions">
        {/* <Link to={'/delete'}> */}
        <button
          type="button"
          className="bookAddlDetailsButton primaryButton"
          onClick={deleteBook}
        >
          Delete From My List
        </button>
        {/* </Link> */}
      </div>
    </article>
  );
};

export default BookCard;
