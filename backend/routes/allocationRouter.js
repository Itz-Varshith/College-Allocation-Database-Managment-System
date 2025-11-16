import {Router} from "express"
import {startAllocation,insertCuttOffRanks,getOpeningAndClosingRanks,FetchRoundNumber,updateFloatStatus} from "../controllers/allocationController.js";
const allocationRouter=new Router();

allocationRouter.get('/start-allocation',startAllocation);
// allocationRouter.get('/insert-cutt-off-ranks',insertCuttOffRanks);
allocationRouter.post('/get-opening-and-closing-ranks',getOpeningAndClosingRanks);
allocationRouter.get('/fetch-round-number',FetchRoundNumber);
allocationRouter.post('/update-float-status',updateFloatStatus);

export default allocationRouter;
