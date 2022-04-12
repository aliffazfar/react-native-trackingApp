import mongoose from 'mongoose'
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(10, (err: mongoose.CallbackError | undefined, salt: any) => {
    if (err) {
      return next(err)
    }

    bcrypt.hash(
      user.password,
      salt,
      (err: mongoose.CallbackError | undefined, hash: any) => {
        if (err) {
          return next(err)
        }
        user.password = hash
        next()
      }
    )
  })
})

userSchema.methods.comparePassword = function (candidatePassword: any) {
  const user = this

  return new Promise((resolve, reject) => {
    bcrypt.compare(
      candidatePassword,
      user.password,
      (err: any, isMatch: any) => {
        if (err) {
          return reject(err)
        }

        if (!isMatch) {
          return reject(false)
        }

        resolve(true)
      }
    )
  })
}

mongoose.model('User', userSchema)
