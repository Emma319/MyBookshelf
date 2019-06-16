import React from 'react'
import PropTypes from 'prop-types'

import SearchField from './SearchField'
import Book from './Book'


function SearchPage (props) {
    const { books, searchBooks, changeShelf } = props;

    return (
        <div className="search-books">
            <SearchField books={ books } searchBooks={ searchBooks } />

            <div className="search-books-results">
                <ol className="books-grid">
                    {books.map(book => (
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

SearchPage.propTypes = {
    books: PropTypes.array.isRequired,
    searchBooks: PropTypes.func.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default SearchPage
