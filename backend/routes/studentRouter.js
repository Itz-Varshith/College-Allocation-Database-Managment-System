import {Router} from "express"
import {addStudentController, addStudentPreferences} from "../controllers/studentController.js"
const studentRouter=new Router();

studentRouter.get('/add',addStudentController)
studentRouter.post('/preferences',addStudentPreferences)

export default studentRouter;