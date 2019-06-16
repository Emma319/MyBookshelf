import React, { Component } from 'react'
import PropTypes from 'prop-types'


class BookDetail extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired
    }

    constructor() {
        super();

        this.handleToogleClick = this.handleToogleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);

        this.state = {
            expand: false
        };
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleToogleClick() {
        if (!this.state.expand) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState( state => ({ expand: !state.expand }));
    }

    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }
        this.handleToogleClick();
    }

    render() {
        const { book } = this.props;
        const { expand } = this.state;

        return (
            <div className="book-expand-container" ref={node => { this.node = node; }}>
                <button className="open-expand" onClick={ this.handleToogleClick }>
                    <img className="book-cover"
                        title="Book Cover"
                        alt={ book.title }
                        src={ book.imageLinks ? book.imageLinks.smallThumbnail : "https://books.google.com/googlebooks/images/no_cover_thumb.gif" }
                    />
                </button>

                { expand && (
                    <div className="book-expand">
                        <h1 className="book-expand-title">
                            <span >{ book.title }</span>  <span className="book-expand-subtitle">{ book.subtitle }</span>
                        </h1>
                        <a className="close-expand" onClick={ this.handleToogleClick }>Close Book Info</a>
                        <div className="book-expand-top">
                            <a className="book-link" href={ book.infoLink }>
                                <img className="book-cover"
                                    title="Book Cover"
                                    alt={ book.title }
                                    src={ book.imageLinks ? book.imageLinks.smallThumbnail : "https://books.google.com/googlebooks/images/no_cover_thumb.gif" }
                                />
                            </a>
                        </div>
                        <div className="book-info">
                            <div className="book-authors">{ book.authors ? book.authors : "No author data" }</div>
                            <div className="book-section">
                                { book.publisher && <span className="book-publisher">{ book.publisher }, </span> }
                                <span className="book-publishedDate">{ book.publishedDate }  </span>
                                { book.categories && <i className="book-categories"> - { book.categories } - </i> }
                                <span className="book-pageCount">{ book.pageCount }</span> pages
                            </div>
                            <div className="book-synopsis">
                                <div className="book-description">
                                    <p>{ book.description }</p>
                                </div>
                            </div>
                            <a className="book-detail" href={ book.infoLink }>Detail »</a>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default BookDetail
