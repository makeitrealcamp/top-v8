const router = require('express').Router()
const { create, show } = require('../controllers/user.controller')

router.route('/').post(create)
router.route('/:userId').get(show)

module.exports = router
