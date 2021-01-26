import React from 'react';
import {Link} from 'react-router-dom';
import './BookListItem.css';

function BookListItem({ book, handleDeleteBook}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{book.title}</h3>
      </div>
      <div className='panel-footer BookListItem-action-panel'>
        <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/details',
            state: {book}
          }}
        >
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {book}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteBook(book._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default BookListItem;