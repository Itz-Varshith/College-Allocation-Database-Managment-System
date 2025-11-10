import {Router} from "express"
import {addStudentController, addStudentPreferences,changeCurrentStatus,getStudentAllocation} from "../controllers/studentController.js"
const studentRouter=new Router();

studentRouter.get('/add',addStudentController)
studentRouter.post('/preferences',addStudentPreferences)
studentRouter.post('/getAllocationDetails',getStudentAllocation)
studentRouter.post('/changeStatus',changeCurrentStatus)

export default studentRouter;