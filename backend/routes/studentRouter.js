import {Router} from "express"
import {addStudentController, addStudentPreferences, changeCurrentStatus, predictStudentResults} from "../controllers/studentController.js"
const studentRouter=new Router();

studentRouter.get('/add',addStudentController)
studentRouter.post('/preferences',addStudentPreferences)
studentRouter.post('/changeStatus',changeCurrentStatus)
studentRouter.post('/getPrediction',predictStudentResults)
export default studentRouter;