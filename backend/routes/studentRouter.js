import {Router} from "express"
import {addStudentController, addStudentPreferences, changeCurrentStatus, predictStudentResults,getStudentAllocation,getCurrentAllocationStatus} from "../controllers/studentController.js"
const studentRouter=new Router();

studentRouter.get('/add',addStudentController)
studentRouter.post('/preferences',addStudentPreferences)
studentRouter.post('/changeStatus',changeCurrentStatus)
studentRouter.post('/getPrediction',predictStudentResults)
studentRouter.post('/getAllocationDetails',getStudentAllocation)
studentRouter.get('/getCurrentAllocation',getCurrentAllocationStatus)

export default studentRouter;