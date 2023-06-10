const mongoose = require('mongoose') 
const Schema = mongoose.Schema

const clientSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  optionSelected: { type: Boolean, require: true },
  optionId: { type: String, require: true },
  service: { type: String, require: true }
}, {timestamps: true})

module.exports = mongoose.model('Clients', clientSchema)
