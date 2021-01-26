import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import { useLocation } from 'react-router-dom';

function BookDetailPage(props) {
  const {state : {book} } = useLocation()
  // const book = useLocation().state.book

  return (
    <>
      <h1>Book Details</h1>
      <BookCard book={book} key={book._id} />
    </>
  );
}

export default BookDetailPage;