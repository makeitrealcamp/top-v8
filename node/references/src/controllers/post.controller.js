const Post = require('../models/post.model')

module.exports = {
  create(req, res) {
    const { body, params: { userId } } = req

    Post
      .create({
        ...body,
        author: userId,
      })
      .then(post => {
        res.status(201).json(post)
      })
      .catch(error => {
        res.status(400).json({ message: 'post could not be created', error })
      })
  },
  list(req, res) {
    Post
      .find()
      .populate('author')
      .then(posts => {
        res.status(200).json(posts)
      })
      .catch(error => {
        res.status(500).json({ message: 'try again later', error })
      })
  }
}
