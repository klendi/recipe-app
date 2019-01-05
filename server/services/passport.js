import passport from 'passport'
import User from '../models/User'
import LocalStrategy from 'passport-local'

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const localOptions = {
  usernameField: 'email'
}

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) return done(err)
    if (!user) return done(null, false)

    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err)

      if (!isMatch) return done(null, false)

      return done(null, user)
    })
  })
})

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
  secretOrKey: process.env.SECRET || '5c2d31479505351f4fc71c5b'
}
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, record) => {
    if (err) return done(err, false)

    if (record) {
      done(null, record)
    } else {
      done(null, false)
    }
  })
})

passport.use(jwtLogin)
passport.use(localLogin)
