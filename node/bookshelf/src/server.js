const express = require('express')
const { v4: uuidv4 } = require('uuid')

const port = 8000
const app = express()

app.use(express.json())

// { _id, title, author, overview }
let books = []

// CRUD
// Create
// POST /books
// Read
// GET /books
// GET /books/:bookId
// Update
// PUT /books/:bookId
// Delete
// DELETE /books/:bookId

app.post('/books', (req, res) => {
  const { body } = req

  console.log(body)
  const book = {
    ...body,
    _id: uuidv4()
  }

  books = books.concat(book)
  // books.push(book)

  res.status(201).json(book)
})

// protocolo - dominio - puerto - ruta - (opt) query - (opt) hash
app.get('/books', (req, res) => {
  const { author, title } = req.query

  let resBooks = books
  if(author) {
    resBooks = resBooks.filter(book => book.author.toLowerCase().includes(author))
  }
  if(title) {
    resBooks = resBooks.filter(book => book.title === title)
  }

  res.status(200).json({ message: 'books found', books: resBooks })
})

app.get('/books/:bookId', (req, res) => {
  const { bookId } = req.params
  const [ book ] = books.filter(book => book._id === bookId)

  if(!book) {
    res.status(404).json({ message: 'resource not found' })
    return
  }

  res.status(200).json({ message: 'book found', book })
})

app.put('/books/:bookId', (req, res) => {
  const { body, params: { bookId } } = req

  let updatedBook
  books = books.map(book => {
    if(book._id === bookId) {
      updatedBook = {
        ...book,
        ...body,
      }
      return updatedBook
    }

    return book
  })

  res.status(200).json({ message: 'book updated', book: updatedBook })
})

app.delete('/books/:bookId', (req, res) => {
  const { bookId } = req.params

  let deletedBook
  books = books.filter(book => {
    if(book._id === bookId) {
      deletedBook = book
      return false
    }
    return true
  })

  res.status(200).json({ message: 'book deleted', book: deletedBook })
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})
