import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {

    state = {
        bookList: []
    }

    handleChange = (query) => {
        if (query) {
            BooksAPI.search(query)
                .then((bookList) => {
                    console.log(bookList)
                    this.setState(() => ({
                        bookList
                    }))
                })
                .catch(err => console.log("empty query"))
        }

    }

    render() {

        const { bookList } = this.state
        const { shelfChange, bookID } = this.props
        console.log(bookID)

        return (
            (
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to='/'><button className="close-search">Close</button></Link>
                        <div className="search-books-input-wrapper">
                            {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                      */}
                            <input
                                type="text" placeholder="Search by title or author"
                                onChange={(e) => this.handleChange(e.target.value)}
                            />

                        </div>
                    </div>
                    <div className="search-books-results">
                        {(typeof bookList.length !== undefined) && (
                            <ol className="books-grid">
                                {bookList.map((book) => (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                            shelf = {book.shelf}
                                            shelfChange={shelfChange}
                                        />
                                    </li>
                                ))}
                            </ol>)
                        }
                    </div>
                </div>
            )
        )
    }
}

export default Search