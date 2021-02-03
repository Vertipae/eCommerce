import express, { Request, Response} from 'express'
const app: express.Application = express()
const port = 5000 // default port to listen
import productsRouter from './routes/products'
// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
  res.send("Hello worlddddhhhhgggggg!")
})

app.use('/api/products', productsRouter)

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
