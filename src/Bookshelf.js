import React, { Component } from 'react'
import Book from './Book'
import propTypes from 'prop-types'

class Bookshelf extends Component {

    static propTypes = {
        title: propTypes.string.isRequired,
        shelf: propTypes.string.isRequired,
        books: propTypes.array.isRequired,
        shelfChange: propTypes.func.isRequired
    }

    render() {
        const { title, shelf, books, shelfChange } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, index) =>
                            (book.shelf === shelf) && (<li key={index}>
                                <Book
                                    book={book}
                                    shelf = {shelf}
                                    shelfChange = {shelfChange} 
                                />
                            </li>))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf