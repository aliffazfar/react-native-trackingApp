import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

const app = express()

const mongoUri =
  'mongodb+srv://john:1234@nodeexpressproject.zkoxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri)

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
})
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to mongo', err)
})

app.get('/', (req: Request, res: Response) => {
  res.send('Hi there!')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
