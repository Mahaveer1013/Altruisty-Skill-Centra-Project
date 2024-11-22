import express from 'express';
const router = express.Router();
import { getAllDomainData, getInternDetails, getMyIntern, registerInternship } from '../controllers/internship.js';
import { loginRequired } from '../middlewares/middleware.js';
router.get('/getDomains',loginRequired,getAllDomainData);
router.post('/registerIntern',loginRequired,registerInternship);
router.get('/getInternDetails',loginRequired,getInternDetails);
router.get('/getMyIntern',loginRequired,getMyIntern)
router.post('/project1',loginRequired);
router.post('/project2',loginRequired)
router.post('/project3',loginRequired);
router.post('/project4',loginRequired)
export default router;