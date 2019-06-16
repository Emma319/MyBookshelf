import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import Shelf from './Shelf'


function MainPage (props) {
    const { books, changeShelf } = props;

    return (
        <div className="main-page">
            <Shelf
                shelfTitle="Currently Reading" shelf="currentlyReading"
                books={ books } changeShelf={ changeShelf }
            />
            <Shelf
                shelfTitle="Want to Read" shelf="wantToRead"
                books={ books } changeShelf={ changeShelf }
            />
            <Shelf
                shelfTitle="Read" shelf="read"
                books={ books } changeShelf={ changeShelf }
            />

            <div className="open-search">
                <Link to="/search" className="go-search" >Add a book</Link>
            </div>
        </div>
    );
}

MainPage.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default MainPage
