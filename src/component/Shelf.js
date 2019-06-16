import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'


function Shelf (props) {
    const { shelfTitle, shelf, books, changeShelf } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ shelfTitle }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter((book) => book.shelf === shelf).map((book) => (
                        <li key={ book.id }>
                            <Book
                                book={ book }
                                changeShelf={ changeShelf }
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

Shelf.propTypes = {
    shelfTitle: PropTypes.oneOf(['Currently Reading', 'Want to Read', 'Read', 'Search Result']).isRequired,
    shelf: PropTypes.oneOf(['currentlyReading', 'wantToRead', 'read', 'none']).isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default Shelf
