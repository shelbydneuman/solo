import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [value, onChange];
};

const AddBook = (props) => {
  const [title, titleOnChange] = useInput('');
  const [author, authorOnChange] = useInput('');
  const [isbn, isbnOnChange] = useInput('');
  const [avg_rating, avg_ratingOnChange] = useInput('');
  const [page_no, page_noOnChange] = useInput('');

  const saveBook = () => {
    const body = {
      title,
      author,
      isbn,
      avg_rating,
      page_no,
    };
    fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
        .then(() => {
        //   console.log(props.history)
        props.history.push('/');
      })
      .catch((err) =>
        console.log('AddBook fetch /api/add: ERROR: ', err)
      );
  };

  return (
    <section className="mainSection createBookContainer">
      <header className="pageHeader">
        <h2>Add Your Book</h2>
        <Link to="/" className="backLink">
          <button type="button" className="btnSecondary">
            Back to My Bookshelf
          </button>
        </Link>
      </header>
      <article className="card addBook">
        <h3>Enter Book Details</h3>

        <div className="addBookFields">
          <label htmlFor="name">Title: </label>
          <input
            name="title"
            placeholder="Harry Potter"
            value={title}
            onChange={titleOnChange}
          />
        </div>

        <div className="createBookFields">
          <label htmlFor="author">Author: </label>
          <input
            name="author"
            placeholder="J.K. Rowling"
            value={author}
            onChange={authorOnChange}
          />
        </div>

        <div className="createBookFields">
          <label htmlFor="isbn">ISBN: </label>
          <input
            name="isbn"
            placeholder="123456789"
            value={isbn}
            onChange={isbnOnChange}
          />
        </div>

        <div className="createBookFields">
          <label htmlFor="avg_rating">Average Rating: </label>
          <input
            name="avg_rating"
            placeholder="4.5"
            value={avg_rating}
            onChange={avg_ratingOnChange}
          />
        </div>

        <div className="createBookFields">
          <label htmlFor="page_no">Number of Pages: </label>
          <input
            name="page_no"
            placeholder="397"
            value={page_no}
            onChange={page_noOnChange}
          />
        </div>

        <div className="addBookButtonContainer">
          <Link to="/" className="backLink">
            <button type="button" className="btnSecondary">
              Cancel
            </button>
          </Link>
          <button type="button" className="btnMain" onClick={saveBook}>
            Save
          </button>
        </div>
      </article>
    </section>
  );
};

export default withRouter(AddBook);
