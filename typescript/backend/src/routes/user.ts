import express from 'express'
import { create, list } from '../controllers/user.controller'

const router = express.Router()

router.route('/').get(list)
router.route('/').post(create)

export default router
