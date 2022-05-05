import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';


class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            fetchedBooks: false,
            books: []
        }
    };

    componentDidMount(){
      //without proxy ---> localhost:8080/read
      //with proxy ---> localhost:3000/read
      fetch('/api/')
        .then((res) => res.json())
        .then((books) => {
          if (!Array.isArray(books)) books = [];
          console.log('setting state!!');

          this.setState({
            books,
            fetchedBooks: true,
          });
        })
        .catch((err) =>
          console.log('Books.componentDidMount: get books: ERROR: ', err)
        );
    }

    render() {
        // console.log('render in books.js' + this.state);
        if (!this.state.fetchedBooks) return (
            <div>
                <h1>Loading books, please wait...</h1>
            </div>
        );

        const { books } = this.state;

        if (!books) return null;
        
        if (!books.length) return (
            <div>
                <h1>Sorry, no books found.</h1>
            </div>
        );

        const bookEl = books.map((book, i) => {
            return (
                <BookCard
                    key={i}
                    info={book}
                />
            );
        });

        return (
            <section className='mainSection'>
                <header className='pageHeader'>
                    <h2>Books (Books.js) </h2>
                    {/* <Link to={'/create'}>
                        <button
                            type='button'
                            className='btnSecondary'
                        >
                            Add book
                        </button>
                    </Link> */}
                </header>
                <div className='bookContainer'>
                    {bookEl}
                </div>
            </section>
        );
    }
}


export default Books;