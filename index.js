const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
const router = require('./router')
// configure app, get express to work how we want
app.use(morgan('combined'))
app.use(bodyParser.json( {type: '*/*'} )) 
router(app)

// Server setup, how the server talks to outsiders 
const port = process.env.PORT || 3090
const server = http.createServer(app) // add functionality to app
server.listen(port)
console.log('Now listen port on localhost//:' + port)