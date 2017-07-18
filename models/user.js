/*Set up instructions for mongoose*/
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema 

/*------------------------------------------------------------*/
/*Model construction, fields to use*/
const userSchema = new Schema({
  email:{ type: String, unique: true, lowercase: true },
  password: String
}) 

/*------------------------------------------------------------*/
// onSave hook encrypt
userSchema.pre('save', function (next)  {
  const user = this
  bcrypt.genSalt(10, function (err, salt)  {
    if(err) { return next(err) }

    bcrypt.hash(user.password, salt, null, function (err, hash)  {
      if(err) { return next(err) }
      user.password = hash
      next()
    })
  })
})

/*methods*/
/*------------------------------------------------------------*/
userSchema.methods.comparedPassword = (candidatePassword, cb) => {
  // compare store password and candidate
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if(err) {return cb(err)}
    cb(null, isMatch)
  })
}

/*------------------------------------------------------------*/
/*Model class for all users*/
const modelClass = mongoose.model('user', userSchema)

module.exports = modelClass