const Post = require('../models/post.model')
const User = require('../models/user.model')

module.exports = {
  async create(req, res) {
    try {
      const { body, params: { userId } } = req

      const post = await Post.create({ ...body, author: userId })
      const user = await User.findById(userId)

      user.posts.push(post._id)
      await user.save({ validateBeforeSave: false })
      res.status(201).json(post)
    } catch(error) {
      res.status(400).json({ message: 'post could not be created', error })
    }

    // Post
    //   .create({
    //     ...body,
    //     author: userId,
    //   })
    //   .then(post => {
    //     User
    //       .findById(userId)
    //       .then(user => {
    //         user.posts.push(post._id)
    //         user
    //           .save({ validateBeforeSave: false })
    //           .then(() => {
    //             res.status(201).json(post)
    //           })
    //       })
    //   })
    //   .catch(error => {
    //     res.status(400).json({ message: 'post could not be created', error })
    //   })
  },
  async list(req, res) {
    try {
      // const posts = await Post.find().populate('author', 'email -password')
      const posts = await Post.find().populate({
        path: 'author',
        select: 'posts -_id',
        populate: {
          path: 'posts',
          select: 'title',
        }
      })
      res.status(200).json(posts)
    } catch(error) {
      res.status(500).json({ message: 'try again later', error })
    }

    // Post
    //   .find()
    //   .populate('author')
    //   .then(posts => {
    //     res.status(200).json(posts)
    //   })
    //   .catch(error => {
    //     res.status(500).json({ message: 'try again later', error })
    //   })
  }
}
