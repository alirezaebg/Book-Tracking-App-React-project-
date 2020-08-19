import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class Search extends Component {

    static propTypes = {
        shelfChange: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    }

    state = {
        query: '',             //input query (search term)
        bookList: [],          //list of book that the search result returns
        itemNotFound: false,   //If no book is found or search result throws an error
    }

    // function that uses BooksAPI search method
    handleChange = (e) => {
        const query = e.target.value;
        this.setState({ query })
        if (query) {
            BooksAPI.search(query.trim())
                .then((bookList) => {
                    (bookList.length > 0) ?
                        this.setState(() => ({
                            bookList,
                            itemNotFound: false
                        })) :
                        this.setState(() => ({
                            bookList: [],
                            itemNotFound: true
                        }))
                })
        }
        else {
            this.setState(() => ({ bookList: [], itemNotFound: false }))
        }
    }

    // function to determine the book shelf (set to 'none' if never been chosen)
    findShelf = (id) => {
        const existing = this.props.books.filter(book => book.id === id)
        return (existing.length > 0) ? existing[0].shelf : 'none'
    }

    render() {
        const { query, bookList } = this.state
        const { shelfChange } = this.props

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
                                value={query}
                                onChange={this.handleChange}
                            />

                        </div>
                    </div>
                    <div className="search-books-results">
                        {(!this.state.itemNotFound) ? (
                            <ol className="books-grid">
                                {bookList.map((book) => (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                            shelf={this.findShelf(book.id)}
                                            shelfChange={shelfChange}
                                        />
                                    </li>
                                ))}
                            </ol>) : (<p>No search result found!</p>)
                        }
                    </div>
                </div>
            )
        )
    }
}

export default Search