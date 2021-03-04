const Book = require('../models/book.model')

module.exports = {
  create(req, res) {
    const { body } = req

    Book
      .create(body)
      .then(book => {
        res.status(201).json({ message: 'book created', book })
      })
      .catch(error => {
        res.status(400).json({ message: 'book could not be created', error })
      })
  },
  list(req, res) {
    const { query } = req
    Book
      .find(query)
      .then(books => {
        res.status(200).json({ message: `${books.length} books found`, books })
      })
      .catch(error => {
        res.status(404).json({ message: 'books could not be found', error })
      })
  },
  show(req, res) {
    const { bookId } = req.params

    Book
      .findById(bookId)
      .then(book => {
        res.status(200).json({ message: 'book found', book })
      })
      .catch(error => {
        res.status(404).json({ message: 'book could not be found', error })
      })
  },
  update(req, res) {
    const { body, params: { bookId } } = req

    Book
      .findByIdAndUpdate(bookId, body, { new: true })
      .then(book => {
        res.status(200).json({ message: 'book updated', book })
      })
      .catch(error => {
        res.status(400).json({ message: 'book could not be updated', error })
      })
  },
  destroy(req, res) {
    const { bookId } = req.params

    Book
      .findByIdAndDelete(bookId)
      .then(book => {
        res.status(200).json({ message: 'book deleted', book })
      })
      .catch(error => {
        res.status(400).json({ message: 'book could not be deleted', error })
      })
  },
}
