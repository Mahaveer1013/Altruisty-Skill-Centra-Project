import express from 'express';
const router = express.Router();
import { getAllDomainData, getInternDetails, registerInternship } from '../controllers/internship.js';
import { loginRequired } from '../middlewares/middleware.js';
router.get('/getDomains',loginRequired,getAllDomainData);
router.post('/registerIntern',loginRequired,registerInternship);
router.get('/getInternDetails',loginRequired,getInternDetails);
export default router;