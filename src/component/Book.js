import React from 'react'
import PropTypes from 'prop-types'

import ChangeShelfList from './ChangeShelfList'
import BookDetail from './BookDetail'


function Book (props) {
    const { book, changeShelf } = props;
        // console.log(book)

    return (
        <div className="book">
            <div className="book-top">
                <BookDetail book={ book } />
                <ChangeShelfList
                    book={ book }
                    changeShelf={ changeShelf }
                />
            </div>
            <div className="book-title">{ book.title }</div>
            <div className="book-authors">{ book.authors ? book.authors[0] : "No author data" }</div>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default Book
