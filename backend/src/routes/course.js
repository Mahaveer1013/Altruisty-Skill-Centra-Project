import express from 'express'
const router = express.Router();
import {getCourses} from "../controllers/domain.js"
import { loginRequired } from '../middlewares/middleware.js';

router.get('/getCourses/:id',loginRequired,getCourses)

export default router