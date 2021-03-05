const User = require('../models/user.model')

// async/await
// async function foo()
module.exports = {
  async create(req, res) {
    try {
      const { body } = req

      const user = await User.create(body).select('email')
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json({ message: 'user could not be created', error })
    }

    // User
    //   .create(body)
    //   .then(user => {
    //     res.status(201).json(user)
    //   })
    //   .catch(error => {
    //     res.status(400).json({ message: 'user could not be created', error })
    //   })
  },
  async show(req, res) {
    try {
      const { userId } = req.params

      const user = await User.findById(userId).select('-password')
      res.status(200).json(user)
    } catch(error) {
      res.status(404).json({ message: 'user could not be found', error })
    }

    // User
    //   .findById(userId)
    //   .populate('posts')
    //   .then(user => {
    //     res.status(200).json(user)
    //   })
    //   .catch(error => {
    //     res.status(404).json({ message: 'user could not be found', error })
    //   })
  }
}

