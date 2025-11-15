import {Router} from "express"
import {startAllocation,insertCuttOffRanks,getOpeningAndClosingRanks,FetchRoundNumber} from "../controllers/allocationController.js";
const allocationRouter=new Router();

allocationRouter.get('/start-allocation',startAllocation);
allocationRouter.get('/insert-cutt-off-ranks',insertCuttOffRanks);
allocationRouter.post('/get-opening-and-closing-ranks',getOpeningAndClosingRanks);
allocationRouter.get('/fetch-round-number',FetchRoundNumber);

export default allocationRouter;