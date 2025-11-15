import {Router} from "express"
import {startAllocation,insertCuttOffRanks,getOpeningAndClosingRanks} from "../controllers/allocationController.js";
const allocationRouter=new Router();

allocationRouter.get('/start-allocation',startAllocation);
allocationRouter.get('/insert-cutt-off-ranks',insertCuttOffRanks);
allocationRouter.post('/get-opening-and-closing-ranks',getOpeningAndClosingRanks);

export default allocationRouter;