import React from 'react';
import { Link, Route } from 'react-router-dom';
import BookDetail from './BookDetail';
 
class BookListDetail extends React.Component {

  render() {
    const { id, name, author, genre, status } = this.props.book;
    
    return (
      <tr>
        <td>
          {id}
        </td>
        <td>
          <Link to={'/books/' + id}>
            {name}
          </Link>
        </td>
        <td>
          {author}
        </td>
        <td>
          {genre}
        </td>
        <td>
          {status}
        </td>

        <Route path={ '/books/:id' } component={ BookDetail } />

      </tr>
      );
    }
}

export default BookListDetail;