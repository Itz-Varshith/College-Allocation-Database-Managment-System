import {Router} from "express"
import {startAllocation,insertCuttOffRanks} from "../controllers/allocationController.js";
const allocationRouter=new Router();

allocationRouter.get('/start-allocation',startAllocation);
allocationRouter.get('/insert-cutt-off-ranks',insertCuttOffRanks);

export default allocationRouter;