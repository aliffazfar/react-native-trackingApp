import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

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

module.exports = router
