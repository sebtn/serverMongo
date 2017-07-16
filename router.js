module.exports = (app) => {
  /*GET*/
  app.get('/', (req, res, next) => {
    res.send( ['s1', 'water', 'cat', 'Seb'] )
  })

}