import AddBook from "./AddBook";
import Bookshelf from "./Bookshelf";
import Title from "./Title";


const ListBooks = ({books, updateBookShelf}) => {
    return (
        <div className="list-books">
            <Title />
            <div className="list-books-content">
                <Bookshelf shelf={'Currently Reading'} books={
                    books.filter((book) => book.shelf === 'currentlyReading')
                }
                updateBookShelf={updateBookShelf} 
                />
                <Bookshelf shelf={'Want to Read'} books={
                    books.filter((book) => book.shelf === 'wantToRead')
                }
                updateBookShelf={updateBookShelf} 
                />
                <Bookshelf shelf={'Read'} books={
                    books.filter((book) => book.shelf === 'read')
                }
                updateBookShelf={updateBookShelf}
                />
            </div>
            <AddBook />
        </div>
    )
}

export default ListBooks;