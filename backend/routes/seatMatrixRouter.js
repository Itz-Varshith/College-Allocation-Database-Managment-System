import {Router} from "express"
import {addSeatMatrixController,getSeatMatrixData} from "../controllers/seatMatrixController.js"


const seatMatrixRouter=new Router()

seatMatrixRouter.get('/add',addSeatMatrixController)
seatMatrixRouter.post('/data',getSeatMatrixData)
export default seatMatrixRouter;