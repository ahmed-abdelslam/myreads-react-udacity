import { useState } from "react";

const DropDownBookshelf = ({currentShelf, book, updateBookShelf}) => {

    currentShelf = currentShelf === undefined ? 'none' : currentShelf
    const [shelf, setShelf] = useState(currentShelf); 
    const handleChange = (event) => {
        setShelf(event.target.value)
        updateBookShelf(book, event.target.value)
    }

    return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={handleChange}>
                <option value="move" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default DropDownBookshelf;