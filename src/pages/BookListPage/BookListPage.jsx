import React from 'react';
import BookListItem from '../../components/BookListItem/BookListItem';

function BookListPage({ user, books, handleDeleteBook}) {
  return (
    <>
      <h1>Book List</h1>
      <div className='BookListPage-grid'>
        {books.map(book => 
          <BookListItem
            book={book}
            user={user}
            key={book._id}
            handleDeleteBook={handleDeleteBook}
          />
        )}
      </div>
    </>
  );
}

export default BookListPage;