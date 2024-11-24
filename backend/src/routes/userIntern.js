import express from 'express';
const router = express.Router();
import { getAllDomainData, getInternDetails, getMyIntern, progressUpdate, registerInternship, updateInternProgress } from '../controllers/internship.js';
import { loginRequired } from '../middlewares/middleware.js';
router.get('/getDomains',loginRequired,getAllDomainData);
router.post('/registerIntern',loginRequired,registerInternship);
router.get('/getInternDetails',loginRequired,getInternDetails);
router.get('/getMyIntern',loginRequired,getMyIntern)
router.post('/updateProgress',loginRequired,progressUpdate)
export default router;