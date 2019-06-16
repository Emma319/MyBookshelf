import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


class SearchField extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        searchBooks: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (q) => {
        this.setState({ query: q });
        this.props.searchBooks(q)
    }

    clearQuery = () => {
        this.setState({ query: '' });
        this.props.searchBooks('')
    }


    render() {
        const { books } = this.props;
        const { query } = this.state;

        return (
            <div>
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                        onClick={ this.clearQuery }
                    >Close</Link>

                    <div className="search-books-input-wrapper">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search books"
                            value={ query }
                            onChange={ e => this.updateQuery(e.target.value) }
                        />
                    </div>
                </div>

                { query && ( books.length > 0 ? (
                    <div className="showing-search-result">
                        <span>There are { books.length } results.</span>
                    </div>
                    ) : (
                    <div className="showing-search-result">
                        <span>No results. Try again</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default SearchField
