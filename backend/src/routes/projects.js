import { getProjects,addProjects } from "../controllers/projects.js";
import { loginRequired } from "../middlewares/middleware.js";
import express from 'express'
const router = express.Router();
router.get('/getprojects', loginRequired,getProjects);
router.post('/addProject', loginRequired,addProjects);
export default router;