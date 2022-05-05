import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import Books from './Books';
// import addBook  from './addBook';

// class App extends Component {
//   render() {
//     return <h1>Header from React</h1>;
//   }
// }
const App = (props) => {
  return (
    <div className="router">
          <main>
              <h1>Shelby! (App.js) </h1>
        <Routes>
          <Route path="/" exact element={<Books/>} />
          <Route path="/add" exact element={<addBook/>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
