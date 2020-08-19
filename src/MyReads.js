import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

const MyReads = props => {
        const { bookList, shelfChange } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf title='Currently Reading' shelf='currentlyReading' books={bookList} shelfChange={shelfChange} />
                    <Bookshelf title='Want To Read' shelf='wantToRead' books={bookList} shelfChange={shelfChange} />
                    <Bookshelf title='Read' shelf='read' books={bookList} shelfChange={shelfChange} />
                </div>
                <div className="open-search">                  
                    <Link to='/search'><button>Add a book</button></Link>
                </div>
            </div>
        )
}

export default MyReads