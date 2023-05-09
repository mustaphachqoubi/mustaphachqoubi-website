require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const uri = process.env.MONGODBURI
const port = process.env.PORT
const services = require('./routes/services.js')


// middleWare
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
// middleWare

app.use('/api/services', services)

mongoose.connect(uri)
.then(() => {    
app.listen(3000, () => {
  console.log(`Connected to MongoDb && start server on port ${port}`)
})
})
.catch((err) => {
  console.log(err)
})
