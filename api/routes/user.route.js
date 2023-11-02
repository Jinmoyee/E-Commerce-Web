import express from 'express'
import { test } from '../controller/user.controller.js';

const route = express.Router();

route.get("/test", test)

export default route