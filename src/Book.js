import React, { Component } from 'react'
import propTypes from 'prop-types'

class Book extends Component {

    static propTypes = {
        book: propTypes.object.isRequired,
        shelf: propTypes.string.isRequired,
        shelfChange: propTypes.func.isRequired
    }
    // function to respond to changing of the book shelf
    handleChange = (book, shelf) => {
        this.props.shelfChange(book, shelf)
    }

    render() {
        const { book, shelf } = this.props
        return (
            <div className="book">
                <div className="book-top">
                    {/* filter out the book if there is no thumbnail */}
                    {book.imageLinks && (
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    )}                 
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={(e) => { // value={shelf} will make sure that default value mathces the book shelf
                            this.handleChange(book, e.target.value)
                        }}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {/* filter out if the author names are not provided */}
                {book.authors && (<div className="book-authors">{book.authors}</div>)} 
            </div>
        )
    }
}

export default Book