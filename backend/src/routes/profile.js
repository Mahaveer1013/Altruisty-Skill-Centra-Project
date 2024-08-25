import { registerProfile } from "../controllers/profile.js";
import express  from "express";
import { loginRequired } from "../middlewares/middleware.js";
const router = express.Router();

router.post('/registerProfile',loginRequired,registerProfile)

export default router