const User = require('../models/user.model')
const { welcome } = require('../utils/mailer')

module.exports = {
  async create(req, res) {
    const { body } = req

    const user = await User.create(body)
    await welcome(user)

    res.status(200).json(user)
  }
}
