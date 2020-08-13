import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

    render() {
        const { books } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, index) => (
                            <li key={index}>
                                <Book
                                    imageUrl={book.imageLinks.thumbnail}
                                    title={book.title}
                                    authors={book.authors} 
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