import React from 'react'
import Book from '../Book'

class Books extends React.Component {
  render() {
    const { books } = this.props

    return (
      <div className="books">
        {!!books && books.length > 0 ? books.map(({ id, title, description, votes}) => {
          return (
            <Book
              key={id}
              title={title}
              description={description}
              votes={votes}
            />
          )
        }) : <p>No books created!</p>}
      </div>
    )
  }
}

export default Books
