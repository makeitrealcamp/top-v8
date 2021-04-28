const { Product, User } = require('../models')

module.exports = {
  async create(req, res) {
    const { body } = req

    const product = await Product.create(
      body,
      { include: [User] }
    )

    product.setUser(body.userId)

    res.status(201).json(product)
  },
  async list(req, res) {
    const products = await Product
      .scope({ include: [User] })
      .findAll()

    res.status(200).json(products)
  }
}
