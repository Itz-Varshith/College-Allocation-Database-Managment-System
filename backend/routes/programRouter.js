import {Router} from "express"
import { addProgramController } from "../controllers/programController.js";
const programRouter = new Router();


programRouter.get('/add',addProgramController);

export default programRouter;