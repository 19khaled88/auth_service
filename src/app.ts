import express, { Application, Request, Response } from 'express'
import cors from 'cors'

//application
const app: Application = express()

app.use(cors())

//parser
   app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello word')
})

export default app
