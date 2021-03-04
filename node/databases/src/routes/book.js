const router = require('express').Router()
const { create, list, show, update, destroy } = require('../controllers/book.controller')

router.route('/').post(create)
router.route('/').get(list)
router.route('/:bookId').get(show)
router.route('/:bookId').put(update)
router.route('/:bookId').delete(destroy)

module.exports = router
