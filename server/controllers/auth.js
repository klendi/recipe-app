import User from '../models/User'
import jwt from 'jsonwebtoken'

//generate token for the user
const tokenForUser = user => {
  const ts = new Date().getTime()
  //we want to generate the jwt based on out user id
  //sub stands for subject, and iat - issued at time
  return jwt.sign({ sub: user.id, iat: ts }, process.env.SECRET)
}

export const signUp = (req, res, next) => {
  const { email, password } = req.body
  console.log('the email and pw is', email, password)

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide a valid email and password' })
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return next(err)
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' })
    }

    //create new user instance and save it in the database
    const user = new User({ email, password })
    user.save(err => {
      if (err) {
        return next(err)
      }
      res.json({
        token: tokenForUser(user),
        message: 'You have sucessfully signed up'
      })
    })
  })
}

export const signIn = (req, res, next) => {
  res.send({
    token: tokenForUser(req.user),
    message: 'you made it, you logged in'
  })
}
