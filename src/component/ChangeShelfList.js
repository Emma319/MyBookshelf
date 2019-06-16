import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ChangeShelfList extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { book, changeShelf } = this.props;

        if (e.target.value === "none") {
            let message = window.confirm('Are you sure you want to remove "' + book.title + '" from your reads library? This will permanently remove this book from your shelves');
            if (message) {
                book.shelf = e.target.value;
                changeShelf(book, e.target.value);
            }
        } else {
            book.shelf = e.target.value;
            changeShelf(book, e.target.value);
        }
    }

    handleButton = (e) => {
        e.preventDefault();
        const { book, changeShelf } = this.props;

        book.shelf = "wantToRead";
        changeShelf(book, "wantToRead");
    }


    render() {
        const { book } = this.props;

        return (
            <div className="shelf-option">
                <div className="book-shelf-changer">
                    <select className="change-shelf-option" value="change" onChange={ this.handleSubmit }>
                        <option value="change" disabled>Change Shelf...</option>
                        { book.shelf === "currentlyReading" ? null : <option value="currentlyReading">Current Reading</option> }
                        { book.shelf === "wantToRead" ? null : <option value="wantToRead">Want to Read</option> }
                        { book.shelf === "read" ? null : <option value="read">Read</option> }
                        { book.shelf === "none" ? null : <option value="none">Remove</option> }
                    </select>
                </div>

                <div className="wantToRead currently-shelf">
                    { book.shelf === "none" ? (
                        <button className="toReadButton" type="submit" name="wantToRead" onClick={ this.handleButton }>
                            <span>Want to Read</span>
                        </button>
                    ) : (
                        <button className="currently-shelf-button" disabled name={ book.shelf }>
                            <span>{ book.shelf === "currentlyReading" ? "Currently Reading" : (book.shelf === "read" ? "Read" : "Want to Read")}</span>
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default ChangeShelfList
