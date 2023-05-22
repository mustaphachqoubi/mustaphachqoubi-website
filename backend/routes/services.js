const express = require('express');

const router = express.Router()

const {  
  getAllServices,
  getASingleService,
  getASingleItemInsideASingleService,
  createANewService,
  deleteAService,
  updateAService,
  deleteAllServices
} = require('../controllers/serviceController.js')

// get all services
router.get('/', getAllServices) 

// get a single service
router.get('/:id', getASingleService)

// get a single item inside a single service
router.get('/:serviceId/items/:itemId', getASingleItemInsideASingleService)

// create a new service
router.post('/', createANewService)

// delete a single service
router.delete('/:id', deleteAService)

// delete all services
router.delete('/', deleteAllServices)

// update a single service
router.patch('/:id', updateAService)



module.exports = router
