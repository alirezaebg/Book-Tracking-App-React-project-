import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

const MyReads = props => {
    const { bookList, shelfChange } = props

    const shelves = [
        { title: 'Currently Reading', shelf: 'currentlyReading' },
        { title:'Want To Read', shelf: 'wantToRead' },
        { title:'Read', shelf: 'read'}
    ]

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {shelves.map((shelf, index) => (
                    <Bookshelf
                        title={shelf.title}
                        shelf={shelf.shelf}
                        books={bookList}
                        shelfChange={shelfChange}
                    />
                ))}
                {/* <Bookshelf title='Currently Reading' shelf='currentlyReading' books={bookList} shelfChange={shelfChange} />
                    <Bookshelf title='Want To Read' shelf='wantToRead' books={bookList} shelfChange={shelfChange} />
                    <Bookshelf title='Read' shelf='read' books={bookList} shelfChange={shelfChange} /> */}
            </div>
            <div className="open-search">
                <Link to='/search'><button>Add a book</button></Link>
            </div>
        </div>
    )
}

// MyReads.propTypes = {
//     bookList: propTypes.array.isRequired,
//     shelfChange: propTypes.func.isRequired
// }

export default MyReads