const express = require('express')
const router = express.Router()

const {
  createClient,
  getClients
} = require('../controllers/clientController.js')


router.post('/', createClient)
router.get('/', getClients)

module.exports = router
