const router = require('express').Router()
const { create, list } = require('../controllers/user.controller')

router.route('/').post(create)
router.route('/').get(list)

module.exports = router
