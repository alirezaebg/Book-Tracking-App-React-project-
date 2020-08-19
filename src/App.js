import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads'
import { Route } from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState(() => ({
          books
        }))
      })
  }

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(this.updateShelf)
  }

  updateShelf = () => {
    BooksAPI.getAll()
      .then(books => {
        console.log(books)
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyReads bookList={this.state.books} shelfChange={this.shelfChange} />
        )} />
        <Route path='/search' render={() => (
          <Search
            shelfChange = {this.shelfChange}
            bookID = {this.state.books.map(book => book.id)}
          />
        )} />

      </div>
    )
  }
}

export default BooksApp
