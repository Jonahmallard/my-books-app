import React from 'react';
import BookListItem from '../../components/BookListItem/BookListItem';

function BookListPage({ books, handleDeleteBook}) {
  return (
    <>
      <h1>Book List</h1>
      <div className='BookListPage-grid'>
        {books.map(book => 
          <BookListItem
            book={book}
            key={book._id}
            handleDeleteBook={handleDeleteBook}
          />
        )}
      </div>
    </>
  );
}

export default BookListPage;