import {Router} from "express"
import { addDepartmentController, getAllDepartments } from "../controllers/departmentController.js";

const departmentRouter = new Router()

departmentRouter.get('/add',addDepartmentController)
departmentRouter.get('/all',getAllDepartments)

export default departmentRouter;