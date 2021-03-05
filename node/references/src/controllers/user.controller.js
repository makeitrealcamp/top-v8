const User = require('../models/user.model')

module.exports = {
  create(req, res) {
    const { body } = req

    User
      .create(body)
      .then(user => {
        res.status(201).json(user)
      })
      .catch(error => {
        res.status(400).json({ message: 'user could not be created', error })
      })
  },
  show(req, res) {
    const { userId } = req.params

    User
      .findById(userId)
      .then(user => {
        res.status(200).json(user)
      })
      .catch(error => {
        res.status(404).json({ message: 'user could not be found', error })
      })
  }
}

