import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import UserRouter from './app/modules/users/route'

//application
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api/v1/user', UserRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello word')
})

export default app
