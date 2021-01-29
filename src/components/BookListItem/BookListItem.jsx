import React from 'react';
import { Link } from 'react-router-dom';
import './BookListItem.css';

function BookListItem({ user, book, handleDeleteBook }) { 
  if (!book) return null;

  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h1>{book.title}</h1>
        <h3>By {book.author}</h3>
        <p>{book.description}</p>
        <p>{book.user.name}</p>
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
        { user._id === book.user._id &&
        <div>
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
        }
      </div>
    </div>
  );
}

export default BookListItem;