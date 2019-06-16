# My Bookshelf App

## For Users

This application is designed to help you manage the state of your reading. The library has three shelves for organizing books that you are interested in **"Want to read"**, reading **"Currently Reading"**, and have read **"read"**.

On the main page (path:_"/"_), you can see the status of all books separated by bookshelf.
Use the drop-down list to move books to another shelf or remove it from shelf.

Go to the search page by clicking the plus button.

On the search page (path:_"/search"_), you can search for books from the database. Once the results come out, click on the book cover to see the details in the book. Click **"Want to read"** button can add the book to "Want to read" shelf in your llibrary. Use the drop-down list to move books to another shelf or remove it from shelf.

### Live Version
https://emma319.github.io/MyBookshelf/

## Get Start

To get started by installing all project dependencies:

* install all project dependencies with `npm install`
* install dependencies [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) with `npm install --save prop-types`
* install dependencies [`prop-types`](https://www.npmjs.com/package/prop-types) with `npm install --save react-router-dom`
* start the development server with `npm start`


## Design

* This application was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
* This application registered a service worker to serve assets from local cache. Service worker lets the app load faster on subsequent visits in production, and gives the app offline capabilities.
* The component struction is as follows:
```
<App />
    <MainPage />
        <Shelf />
            <Book />
                <BookDetail />
                <ChangeShelfList />
    <SearchPage />
        <SearchField />
        <Book />
            <BookDetail />
            <ChangeShelfList />

```

* The files struction is as follows:
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # The root of the app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    │   └── cancel.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
    └── component # Components file for rendering.
          └── MainPage.js
          └── SearchPage.js
          └── SearchField.js
          └── Shelf.js
          └── Book.js
          └── BookDetail.js
          └── ChangeShelfList.js

```


## Backend Server

The backend server and API is provided in file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to get or search book's information.

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
