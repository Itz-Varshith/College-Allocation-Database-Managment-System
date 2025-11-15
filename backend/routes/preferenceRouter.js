import {Router} from "express"
import {addAllStudentPreferences, addPreferences,getPreferences} from "../controllers/preferencesController.js"

const prefernceRouter=new Router();
prefernceRouter.post('/add',addPreferences)
prefernceRouter.get('/self/:id',getPreferences)
prefernceRouter.get('/addAll',addAllStudentPreferences)
export default prefernceRouter;