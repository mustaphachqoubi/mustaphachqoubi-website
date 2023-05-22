const Services = require('../models/servicesModel.js') 
const mongoose = require('mongoose')

// GET all services
const getAllServices = async (req, res) => {
  const services = await Services.find({}).sort({createdAt: -1})

  res.status(200).json(services)
}

// GET a single service
const getASingleService = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: "id is not valid"})
  }

  const service = await Services.findById(id)

  if(!service){
    return res.status(404).json({error: 'There is no service with this id found'})
  }

  res.status(200).json(service)
}

// GET a single item inside a single service
const getASingleItemInsideASingleService = async (req, res) => {
  const { serviceId, itemId } = req.params
    try{
    const service = await Services.findById(serviceId);
    const item = service?.items?.find((item) => item._id.toString() === itemId);

    if (!item) {
      return res.status(404).json({ error: "There is no item with this id" });
    }

    res.status(200).json(item);
  } catch (err){
    res.status(500).json({ error: err.message })
  }
  
}

// POST a new service
const createANewService = async (req, res) => {
  const { title, items } = req.body

  try{
    const services = await Services.create({ title, items})
    res.status(200).json(services)
  } catch (err){
    res.status(400).json({err: err.message})
  }
}

// DELETE a service
const deleteAService = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({ error: 'id is not valid'})
  }
  const service = await Services.findOneAndDelete({ _id: id })

  if(!service){
    return res.status(404).json({ error: 'There is no service with this id found'})
  }

  res.status(200).json(service)
}

// DELETE all services
const deleteAllServices = async (req, res) => {
  const services = await Services.deleteMany({})

  if(!services){
    return res.status(404).json({ error: "the delete process failed !" })
  }

  res.status(200).json(services)
}

// PATCH a service
const updateAService = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({ error: 'id is not valid'})
  }

  const service = await Services.findOneAndUpdate({ _id: id }, { ...req.body })

  if(!service){
    return res.status(404).json({ error: 'There is no service with this id found'})
  }

  res.status(200).json(service)
}


module.exports = {
  getAllServices,
  getASingleService,
  getASingleItemInsideASingleService,
  createANewService,
  deleteAService,
  updateAService,
  deleteAllServices
}
