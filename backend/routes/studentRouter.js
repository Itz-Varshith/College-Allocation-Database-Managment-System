import {Router} from "express"
import {addStudentController, addStudentPreferences,changeCurrentStatus,getCurrentAllocationStatus,getStudentAllocation} from "../controllers/studentController.js"
const studentRouter=new Router();

studentRouter.get('/add',addStudentController)
studentRouter.post('/preferences',addStudentPreferences)
studentRouter.post('/getAllocationDetails',getStudentAllocation)
studentRouter.post('/changeStatus',changeCurrentStatus)
studentRouter.get('/getCurrentAllocation',getCurrentAllocationStatus)
export default studentRouter;