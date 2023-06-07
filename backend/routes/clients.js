const express = require('express')
const router = express.Router()

const {
  createClient,
  getClients,
  deleteClients
} = require('../controllers/clientController.js')


router.post('/', createClient)
router.get('/', getClients)
router.delete('/', deleteClients)

module.exports = router
