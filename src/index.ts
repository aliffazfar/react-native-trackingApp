require('./models/User')
import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

const authRoutes = require('./routes/authRoutes')
const requireAuth = require('./middleware/requireAuth')
const app = express()

app.use(express.json())
app.use(authRoutes)

const mongoUri =
  'mongodb+srv://john:1234@nodeexpressproject.zkoxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri)

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
})
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to mongo', err)
})

app.get('/', requireAuth, (req: Request, res: Response) => {
  res.send(`Your email: ${req.user.email}`)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
