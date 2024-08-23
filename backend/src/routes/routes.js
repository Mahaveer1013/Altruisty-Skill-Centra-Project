import { credentialLogin, credentialSignup, getUser, googleLogin, logout } from '../controllers/auth.js';
import { checkIsAdmin, loginRequired } from '../middlewares/middleware.js';
import express from 'express';
import { checkUserRoute } from '../controllers/user.js';
import { checkAdminRoute } from '../controllers/admin.js';
import { getAllDomainData, registerInternship, updateInternProgress } from '../controllers/internship.js';
import { createCommunity } from '../controllers/community.js';

const router = express.Router();

// ===========> get current user initally in react <==========
router.get('/user', loginRequired, getUser);

// ===========> Login routes <===============
router.post('/google-login', googleLogin);
router.post('/credential-login', credentialLogin);
router.post('/credential-signup', credentialSignup);
router.get('/logout', logout);

// ===========> admin routes <==============
router.get('/check-admin', loginRequired, checkIsAdmin, checkAdminRoute);

// ===========> user routes <===============
router.get('/check-user', loginRequired, checkUserRoute);

// ===========> community routes <===========
router.post('/create-community', loginRequired, createCommunity);
// router.post('/get-messages', loginRequired, );
// router.post('/get-recent-chats', loginRequired, );

// ===========> internship routes <=============
router.post('/register-internship',loginRequired, registerInternship)
router.get('/get-all-domain',loginRequired, getAllDomainData)
router.post('/internship-progress',loginRequired, updateInternProgress)


export default router;
