const Authentication = require('./controllers/authentication')

module.exports =  (app) => {
  /*POST typeOf http-req */
  app.post('/signup', Authentication.signup)

}