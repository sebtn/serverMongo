const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

/*create options*/
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

/*Create strategy*/
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done)  => {
  User.findById(payload.sub, (err, user) => {
    if(err) { return done(err, false) }
    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})

/*Tell passport to use it*/
passport.use(jwtLogin)