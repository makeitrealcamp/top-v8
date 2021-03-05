const router = require('express').Router()
const { create, list } = require('../controllers/post.controller')

router.route('/:userId').post(create)
router.route('/').get(list)

module.exports = router
