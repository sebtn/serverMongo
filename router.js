const passport = require('passport')
const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')

/*------------------------------------------------------------*/
const requireAuth = passport.authenticate(
  'jwt', 
  { session: false }
)

const requireSignin = passport.authenticate(
  'local',
  { session: false }
)

/*------------------------------------------------------------*/
module.exports =  (app) => {
  /*POST typeOf http-req */
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: "code R" })
  })
  app.post('/signup', Authentication.signup)
  app.post('/signin', requireSignin, Authentication.signin)

}