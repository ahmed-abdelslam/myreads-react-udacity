import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListBooks from "./ListBooks";
import Search from "./Search";
import * as BooksAPI from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);
    const [force, setForce] = useState(true);

    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksAPI.getAll();
            setBooks(res);
        }

        getBooks();
    }, []);

    const updateBookShelf = (updatedBook, shelf) => {
        const update = async () => {
            await BooksAPI.update(updatedBook, shelf);
            const getBook = books.find(book => book.id === updatedBook.id)
            if (getBook) { //this means the book already in the list
              getBook.shelf = shelf;
              setBooks(books);
              setForce(!force); // just to force re render
            }
            else {// this means this is a new book and we want to add it to the list
              updatedBook.shelf = shelf
              setBooks(books.concat(updatedBook));
              setForce(!force);
            }
        }

        update();
    }

  return (
    <div className="app">
      <Routes>
        <Route path='/' exact element={
          <ListBooks books={books} updateBookShelf={updateBookShelf} />
        } 
        />
        <Route path='/search' exact element={
          <Search books={books} updateBookShelf={updateBookShelf} />
        } 
        />
      </Routes>
      
    </div>
  );
}

export default App;
