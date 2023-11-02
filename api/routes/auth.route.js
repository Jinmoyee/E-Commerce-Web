import express from 'express'
import { auth } from '../controller/auth.controller.js'

const route = express.Router()

route.post("/signup", auth)

export default route