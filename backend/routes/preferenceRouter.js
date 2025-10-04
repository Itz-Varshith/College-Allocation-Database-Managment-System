import {Router} from "express"
import {addPreferences,getPreferences} from "../controllers/preferencesController.js"

const prefernceRouter=new Router();
prefernceRouter.post('/add',addPreferences)
prefernceRouter.get('/self/:id',getPreferences)
export default prefernceRouter;