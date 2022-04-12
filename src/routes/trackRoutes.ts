import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

const requireAuth = require('../middleware/requireAuth')

const Track = mongoose.model('Track')

const router = express.Router()

router.use(requireAuth)

router.get('/tracks', async (req: Request, res: Response) => {
  const tracks = await Track.find({ userId: req.user._id })

  res.send(tracks)
})

router.post('/tracks', async (req: Request, res: Response) => {
  const { name, locations } = req.body

  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: 'You must provide a name and locations' })
  }

  try {
    const track = new Track({ name, locations, userId: req.user._id })
    await track.save()
    res.send(track)
  } catch (err) {
    res.status(422).send({ error: err.message })
  }
})

module.exports = router