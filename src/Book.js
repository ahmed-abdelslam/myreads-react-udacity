import DropDownBookshelf from "./DropDownBookshelf";

const Book = ({book, updateBookShelf, books}) => {

    if (books) {
        const getBook = books.find(listedBook => listedBook.id === book.id)
        if (getBook) {
            book.shelf = getBook.shelf;
        }
    }

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        book.imageLinks !== undefined ? `url(${book.imageLinks.smallThumbnail})` : ''
                    }}
                    ></div>
                    <DropDownBookshelf currentShelf={book.shelf} book={book} updateBookShelf={updateBookShelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {
                        book.authors !== undefined ? book.authors.join(', ') : ''
                    }
                </div>
            </div>
        </li>
    )
}

export default Book;