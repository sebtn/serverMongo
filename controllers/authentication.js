const User = require('../models/user')

exports.signup =  (req, res, next) => {
  // access data from POST = req.body
  const email = req.body.email
  const password = req.body.password

  User.findOne({email: email}, (err, existingUser) => {
    if (err) {return next(err)} // db failed connect
    if (existingUser) {
      return res.status(422).send({error: 'already in use'})
    }

    const user = new User({
      email: email,
      password: password
    }) 

    user.save( (err) => {
      if (err) {return next(err)}
      res.json({"success":"true"})
    })
  })

}