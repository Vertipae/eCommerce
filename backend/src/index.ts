import express, { Request, Response} from 'express'
import cors from 'cors'
const app: express.Application = express()
const port = 5000 // default port to listen
import productsRouter from './routes/products'
import path from 'path'

app.use(express.json());
app.use(cors())
app.use('/api/products', productsRouter)
// app.use(express.static('data'))
// app.use('/static', express.static(path.join(__dirname, 'data')))

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
  res.send("Hello worlddddhhhhgggggghhhhhhh!")
})


// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
