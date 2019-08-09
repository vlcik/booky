import React from 'react';
import { Link } from 'react-router-dom';
 
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
      </tr>
      );
    }
}

export default BookListDetail;