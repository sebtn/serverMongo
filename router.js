module.exports = (app) => {
  /*GET typeOf http-req */
  app.get('/', (req, res, next) => { 
    res.send([{ stringone: 1 }, {stringtwo: 2}])
    // res.send({ 'valueOne': ['s1', 'water', 'cat', 'Seb'] })
    console.log('this is post RES', res)
    console.log('this is post REQ', req)

  })  
  /*POST*/
  app.post('/', (req, res, next) => {
  })

}