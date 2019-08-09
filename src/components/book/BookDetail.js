import React from 'react';
 
const bookDetail = ({ match }) => {
  return (
    <div>
      { match.params.id}
    </div>
  );
}

export default bookDetail;