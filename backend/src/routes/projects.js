import { getProjects,addProjects } from "../controllers/projects.js";
const router = express.Router();
router.get('/getprojects', getProjects);
router.post('/addProject', addProjects);
export default router;