/*Set up instructions for mongoose*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema 

/*Model construction, fields to use*/
const userSchema = new Schema({
  email:{ type: String, unique: true, lowercase: true },
  password: String
}) 

/*Model class for all users*/
const modelClass = mongoose.model('user', userSchema)

module.exports = modelClass