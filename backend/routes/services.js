const express = require('express');

const router = express.Router()

// get all services
router.get('/', (req, res) => {
  res.json({services: ['s1', 's2']})
})

// get a single service
router.get('/:service/:id', (req, res) => {
  res.json({service: {serviceName: 'landing page', serviceId: 3}})
})

// post a single service
router.post('/:service/:id', (req, res) => {
  res.json({msg: "post a service"})
})

// delete a single service
router.delete('/:service/:id', (req, res) => {
  res.json({msg: 'delete a single service'})
})

// update a single service
router.patch('/:service/:id', (req, res) => {
  res.json({msg: 'update a single service'})
})

module.exports = router
