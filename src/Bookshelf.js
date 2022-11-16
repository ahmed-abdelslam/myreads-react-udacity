import Book from "./Book";

const Bookshelf = ({shelf, books, updateBookShelf}) => {
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.map((book) => <Book key={book.id} book={book} updateBookShelf={updateBookShelf}/>)
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Bookshelf;