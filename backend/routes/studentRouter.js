import {Router} from "express"
import {addStudentController, addStudentPreferences,getStudentAllocation} from "../controllers/studentController.js"
const studentRouter=new Router();

studentRouter.get('/add',addStudentController)
studentRouter.post('/preferences',addStudentPreferences)
studentRouter.post('/getAllocationDetails',getStudentAllocation)

export default studentRouter;