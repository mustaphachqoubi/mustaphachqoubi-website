const express = require('express')
const router = express.Router()

const {
  createClient,
} = require('../controllers/clientController.js')


router.post('/', createClient)

module.exports = router
