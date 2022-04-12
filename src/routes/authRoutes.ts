import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

const User = mongoose.model('User')

const router = express.Router()

router.post('/signup', async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = new User({ email, password })
    await user.save()

    res.send('You made a post request')
  } catch (err) {
    res.status(422).send(err.message)
  }
})

module.exports = router
