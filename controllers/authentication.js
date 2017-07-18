const jwt = require('jwt-simple')
const User = require('../models/user')
const config = require('../config') 

/*------------------------------------------------------------*/
tokenForUser = (user) => {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

/*------------------------------------------------------------*/
exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) })
}

/*------------------------------------------------------------*/
exports.signup =  (req, res, next) => {
  // access data from POST = req.body
  const email = req.body.email
  const password = req.body.password

/*------------------------------------------------------------*/
  if(!email || !password) {
    return res.status(422).send( {error: 'Must provide email and pw'} )
  }

/*------------------------------------------------------------*/
  const user = new User({
    email: email,
    password: password
  }) 

/*------------------------------------------------------------*/
  User.findOne({ email: email }, (err, existingUser) => {
    if (err) { return next(err) } // db failed connect
    if (existingUser) {
      return res.status(422).send( {error: 'email already in use'} )
    }
    user.save( (err) => {
      if (err) { return next(err) }
    })
      // send back token 
      res.json({ token: tokenForUser(user) }) 
  })

}
/*------------------------------------------------------------*/