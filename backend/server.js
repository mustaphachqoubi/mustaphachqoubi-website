require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const uri = process.env.MONGODBURI
const port = process.env.PORT
const services = require('./routes/services.js')
const projects = require('./routes/projects.js')
const clients = require('./routes/clients.js')
const cors = require('cors')

// middleWare
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
// middleWare

app.use(cors())

app.use('/api/services', services)

app.use('/api/projects', projects)

app.use('/api/clients', clients)

mongoose.connect(uri)
.then(() => {    
app.listen(port, () => {
  console.log(`Connected to MongoDb && start server on port ${port}`)
})
})
.catch((err) => {
  console.log(err)
})
