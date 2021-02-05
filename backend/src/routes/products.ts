import express, { Request, Response} from 'express'
import productsdata from '../data/products'

const router = express.Router()

router.get("/", (req:Request, res:Response) => {
    res.send(productsdata)
})

export default router