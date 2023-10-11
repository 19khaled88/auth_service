import express, { Application, Request, Response } from  'express'


//application 
const app:Application = express()



app.get('/',(req:Request,res:Response)=>{
    res.send('Hello word')
})

export default app
