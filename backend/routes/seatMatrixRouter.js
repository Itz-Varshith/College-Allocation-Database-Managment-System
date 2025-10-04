import {Router} from "express"
import {addSeatMatrixController,getSeatMatrixData} from "../controllers/seatMatrixController.js"


const seatMatrixRouter=new Router()

seatMatrixRouter.post('/add',addSeatMatrixController)
seatMatrixRouter.post('/data',getSeatMatrixData)
export default seatMatrixRouter;