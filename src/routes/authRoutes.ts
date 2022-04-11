import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

const User = mongoose.model('User')

const router = express.Router()

router.post('/signup', async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = new User({ email, password })
  await user.save()

  res.send('You made a post request')
})

module.exports = router
