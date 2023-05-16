const express = require('express');

const router = express.Router()

const {  
  getAllServices,
  getASingleService,
  getASingleItemInsideASingleService,
  createANewService,
  deleteAService,
  updateAService
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
router.delete('/:id', deleteAService)

// update a single service
router.patch('/:id', updateAService)



module.exports = router
