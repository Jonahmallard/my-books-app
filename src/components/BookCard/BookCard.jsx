import React from 'react';
import {Link} from 'react-router-dom';

function BookCard({book}) { 
  return (
    <div>
      <div>
        <h2>{book.title}</h2>
      </div>
      <div>
          <strong>Author: <span>{book.author}</span></strong>
            &nbsp;&nbsp;
          <strong>Description: <span>{book.description}</span></strong>
      </div>
      <br/>
      <div>
        <Link to='/' style={{ backgroundColor: '#F67F00', border: '1px solid black', height: '5px' }}>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default BookCard;