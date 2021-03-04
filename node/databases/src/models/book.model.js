const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
  title: String,
  author: String,
  rating: Number,
  new: Boolean,
}, {
  timestamps: true,
})

const Book = model('Book', bookSchema)

// Book -> books

module.exports = Book
