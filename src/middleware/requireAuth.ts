import mongoose from 'mongoose'
import { Request, Response, NextFunction } from 'express'
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

module.exports = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in.' })
  }

  const token = authorization.replace('Bearer ', '')
  jwt.verify(
    token,
    'MY_SECRET_KEY',
    async (err: any, payload: { userId: any }) => {
      if (err) {
        return res.status(401).send({ error: 'You must be logged in.' })
      }

      const { userId } = payload

      const user = await User.findById(userId)
      req.user = user
      next()
    }
  )
}
