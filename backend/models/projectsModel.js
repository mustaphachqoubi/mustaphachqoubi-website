const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectsSchema = new Schema({
  name: {type: String, require: true},
  img: {type: String, require: true},
  live: {type: String, require: true},
  sourceCode: {type: String, require: true}
}, {timestamps: true})

module.exports = mongoose.model('Projects', projectsSchema)
