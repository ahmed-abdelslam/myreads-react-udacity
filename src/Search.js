import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from './BooksAPI';

const Search = ({books, updateBookShelf}) => {
    const [query, setQuery] = useState("");
    const [booksResult, setbooksResult] = useState([]);

    const updateQuery = (query) => {
        const update = async () => {
            setQuery(query);
            if (query !== "") {
                const res = await BooksAPI.search(query);
                updateBooksResult(res);
            }
        }
        
        update();
    }

    const updateBooksResult = (results) => {
        if (!results.hasOwnProperty('error'))
            setbooksResult(results);
        else 
            setbooksResult([]);
    }

    const showingBooks = query === "" ? [] : booksResult;

    return (
        <div className="search-books">
            <div className="search-books-bar">
            <Link to="/"
                className="close-search"
            >
                Close
            </Link>
            <div className="search-books-input-wrapper">
                <input
                type="text"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                placeholder="Search by title, author, or ISBN"
                />
            </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        showingBooks.map((book) => <Book key={book.id} book={book} updateBookShelf={updateBookShelf} books={books} />)
                    }
                </ol>
            </div>
        </div>
    )
}

export default Search;