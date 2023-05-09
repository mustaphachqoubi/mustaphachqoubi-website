const express = require('express');

const router = express.Router()

const Services = require('../models/servicesModel')

// get all services
router.get('/', (req, res) => {
  res.json({services: ['s1', 's2']})
})

// get a single service
router.get('/:service/:id', (req, res) => {
  res.json({service: {serviceName: 'landing page', serviceId: 3}})
})

// post a single service
router.post('/:service/:id', async (req, res) => {

  const { title, items } = req.body

  try{
    const services = await Services.create({ title, items})
    res.status(200).json(services)
  } catch (err){
    res.status(400).json({err: err.message})
  }
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
