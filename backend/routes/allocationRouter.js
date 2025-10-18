import {Router} from "express"
import {startAllocation} from "../controllers/allocationController.js";
const allocationRouter=new Router();

allocationRouter.get('/start-allocation',startAllocation);


export default allocationRouter;