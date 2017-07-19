const express = require('express')
const http = require('http')
const morgan = require('morgan') // middleware to login
const bodyParser = require('body-parser') // middleware parse into json
const mongoose = require('mongoose')

const router = require('./router')

/*
  Db setup
*/
mongoose.connect('mongodb://localhost:auth/auth')

/* configure app, get express to 
   work how we want */
const app = express() // instance app
app.use(morgan('combined'))
app.use(bodyParser.json( {type: '*/*'} )) 
router(app)

/* Server setup, how the server 
   talks to outsiders  */
const port = process.env.PORT || 3090 
const server = http.createServer(app) // add functionality to app
server.listen(port)
console.log('Now listening port localhost//:' 
  + port) 