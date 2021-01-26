import React from 'react';
import {Link} from 'react-router-dom';

function BookCard({book}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{book.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Title</dt>
          <dd>{book.title}</dd>
          <dt>Author</dt>
          <dd>{book.author}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/index'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default BookCard;