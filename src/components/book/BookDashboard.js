import React, { Component } from 'react';
import BookListDetail from './BookListDetail';
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    author: 'J.R.R. Tolkien',
    name  : 'Hobbit',
    status: 'READ',
    genre : 'Fantasy' 
  },
  {
    id: 2,
    author: 'Zbygniew Nienacki',
    name  : 'Pan Tragacik a Fantomas',
    status: 'READ',
    genre : 'Crimi' 
  },
  {
    id: 3,
    author: 'Jo Nesbo',
    name  : 'Noz',
    status: 'UNREAD',
    genre : 'Crimi' 
  }
];

class BookDashboard extends Component  {

  render () {
    return (
      <div className="container">
        <div className="row pb-3">
          <h2>Dashboard</h2>
        </div>
        <div className="row pb-3">
          <Link to={'/books/add'}>
            <button type="button" className="btn btn-success">
              + add book
            </button>
          </Link>
        </div>

        <div className="row">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Genre</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                  book => <BookListDetail key={book.id} book={book} />        
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default BookDashboard;