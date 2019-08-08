import React from 'react';
 
const BookDetail = ({ match }) => {
  return (
    <div>
      { console.log(match) }
      { match.params.id}
    </div>
  );
}

export default BookDetail;