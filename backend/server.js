require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const uri = process.env.MONGODBURI
const port = process.env.PORT

mongoose.connect(uri)
.then(() => {    
app.listen(3000, () => {
  console.log(`Connected to MongoDb && start server on port ${port}`)
})

  })
.catch((err) => {
    console.log(err)
  })

