import express from 'express'
import { UserController } from './controller'

const router = express.Router()

router.post('/create', UserController.createUser)

export default router
