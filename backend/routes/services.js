const express = require('express');

const router = express.Router()

const Services = require('../models/servicesModel')

const {  
  getAllServices,
  getASingleService,
  getASingleItemInsideASingleService,
  createANewService
} = require('../controllers/serviceController.js')

// get all services
router.get('/', getAllServices) 

// get a single service
router.get('/:id', getASingleService)

// get a single item inside a single service
router.get('/:serviceId/items/:itemId', getASingleItemInsideASingleService)

// create a new service
router.post('/:id', createANewService)

// delete a single service
router.delete('/:id', (req, res) => {
  res.json({msg: 'delete a single service'})
})

// update a single service
router.patch('/:id', (req, res) => {
  res.json({msg: 'update a single service'})
})

module.exports = router
