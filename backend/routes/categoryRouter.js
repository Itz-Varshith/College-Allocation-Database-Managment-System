import {Router} from "express"
import {createCategory, getAllCategories} from "../controllers/categoryController.js"

const categoryRouter=new Router();


categoryRouter.post('/create',createCategory);
categoryRouter.get('/all',getAllCategories)

export default categoryRouter;