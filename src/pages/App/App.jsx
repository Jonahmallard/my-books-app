import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import * as bookAPI from '../../utilities/books-api';
import BookListPage from '../BookListPage/BookListPage';
import AddBookPage from '../AddBookPage/AddBookPage';
import BookDetailPage from '../BookDetailPage/BookDetailPage';
import EditBookPage from '../EditBookPage/EditBookPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const books = await bookAPI.getAll();
      setBooks(books) 
    }
    getBooks();
  }, [])

  async function handleAddBook(newBookData) {
    const newBook = await bookAPI.create(newBookData);
    setBooks([...books, newBook]);
  }

  const history = useHistory();

  useEffect(() => {
    history.push('/')
  }, [books, history])

  async function handleUpdateBook(updatedPuppyData) {
    const updatedBook = await bookAPI.update(updatedPuppyData);
    const newBookArray = books.map(book => book._id === updatedBook._id ? updatedBook : book)
    setBooks(newBookArray);
  }

  async function handleDeleteBook(bookID) {
    await bookAPI.deleteOne(bookID);
    setBooks(books.filter(book => book._id !== bookID))
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path='/' render={() => 
              <BookListPage books={books} handleDeleteBook={handleDeleteBook} />
            } />
            <Route exact path='/index/new' render={() => 
              <AddBookPage handleAddBook={handleAddBook} /> 
            } />
            <Route exact path='/details' render={() => 
              <BookDetailPage /> 
            } />
            <Route exact path="/edit">
              <EditBookPage handleUpdateBook={handleUpdateBook} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
