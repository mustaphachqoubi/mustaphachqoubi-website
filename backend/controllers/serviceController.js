const Services = require('../models/servicesModel.js') 

const getAllServices = async (req, res) => {
  const services = await Services.find({}).sort({createdAt: -1})

  res.status(200).json(services)
}

const getASingleService = async (req, res) => {
  const { id } = req.params
  const service = await Services.findById(id)

  if(!service){
    return res.status(404).json({error: 'There is no service with this id found'})
  }

  res.status(200).json(service)
}

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

const createANewService = async (req, res) => {
  const { title, items } = req.body

  try{
    const services = await Services.create({ title, items})
    res.status(200).json(services)
  } catch (err){
    res.status(400).json({err: err.message})
  }
}

module.exports = {
  getAllServices,
  getASingleService,
  getASingleItemInsideASingleService,
  createANewService
}
