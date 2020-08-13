import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class MyReads extends Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf books = {this.props.bookList}/>
                </div>
                {/* <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div> */}
            </div>
        )
    }
}

export default MyReads