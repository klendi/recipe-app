import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String
})

//this runs right before saving the model
userSchema.pre('save', function(next) {
  //we get a refernce to current user model
  const user = this
  const saltLevel = 10

  //the greater the salt level is the more complex it becomes
  //although it takes much more time to generate
  bcrypt.genSalt(saltLevel, function(err, salt) {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

//we can use this method in other places, we can just do modelInstance.comparePassword
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  //we compare the candidate password (hashed password from the database)
  //with a one user gave us (unhashed, plain text)
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err)

    //we have a match, its our password
    callback(null, isMatch)
  })
}

export default mongoose.model('User', userSchema)
