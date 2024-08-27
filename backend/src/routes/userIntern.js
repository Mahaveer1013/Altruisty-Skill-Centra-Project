import express from 'express';
const router = express.Router();
import { getAllDomainData, registerInternship } from '../controllers/internship.js';
import { loginRequired } from '../middlewares/middleware.js';
router.get('/getDomains',loginRequired,getAllDomainData);
router.post('/registerIntern',loginRequired,registerInternship);
export default router;