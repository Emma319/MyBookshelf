import React from 'react'
import { Route } from 'react-router-dom'

import MainPage from './component/MainPage'
import SearchPage from './component/SearchPage'

import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
    state = {
        BooksList: [],
        SearchedBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ BooksList: books })
        })
    }

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
        BooksAPI.getAll().then((books) => {
            this.setState({ BooksList: books })
        })
    }

    searchBooks = (query) => {
        let  showingBooks;
        if (query) {
            BooksAPI.search(query).then((books) => {
                if (books.error) {
                    this.setState({ SearchedBooks: [] });
                } else {
                    showingBooks = books.map(this.synShelf);
                    this.setState({ SearchedBooks: showingBooks });
                }
            })
        } else {
            this.setState({ SearchedBooks: [] });
        }
    }

    synShelf = (book) => {
        let match = this.state.BooksList.filter((bookinList) => book.id === bookinList.id);
        match.length ? book.shelf=match[0].shelf : book.shelf="none" ;
        return book;
    }


    render() {
        const { BooksList, SearchedBooks } = this.state;

        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>My BookShelf</h1>
                    </div>

                    <div className="list-books-content">
                        <Route exact path="/" render={() => (
                            <MainPage
                                books={ BooksList }
                                changeShelf={ this.changeShelf }
                            />
                        )}/>

                        <Route path="/search" render={() => (
                            <SearchPage
                                books={ SearchedBooks }
                                changeShelf={ this.changeShelf }
                                searchBooks={ this.searchBooks }
                            />
                        )}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksApp
