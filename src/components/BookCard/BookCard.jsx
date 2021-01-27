import React from 'react';
import {Link} from 'react-router-dom';

function BookCard({book}) { 
  return (
    <div>
      <div>
        <h2>{book.title}</h2>
      </div>
      <div>
        <dl>
          <dt>Title :</dt>
          <dd>{book.title}</dd>
          <dt>Author: </dt>
          <dd>{book.author}</dd>
          <dt>Description: </dt>
          <dd>{book.description}</dd>
        </dl>
      </div>
      <div>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default BookCard;