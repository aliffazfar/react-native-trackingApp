import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { Document } from 'mongoose'

export interface UserDocument extends Document {
  comparePassword(candidate: string): Promise<boolean> // or whatever it returns
}

const jwt = require('jsonwebtoken')
const User = mongoose.model<UserDocument>('User')

const router = express.Router()

router.post('/signup', async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = new User({ email, password })
    await user.save()
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
    res.send({ token })
  } catch (err) {
    res.status(422).send(err.message)
  }
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' })
  }

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(422).send({ error: 'Email not found' })
  }

  try {
    await user.comparePassword(password)
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
    res.send({ token })
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password or email' })
  }
})

module.exports = router
