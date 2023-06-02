const Clients = require('../models/clientsModel.js')


// get all clients 
const getClients = async (req, res) => {
  const clients = await Clients.find({}).sort({ createdAt: -1 })

  res.status(200).json(clients)
}

// create new client 
const createClient = async (req, res) => {
  const { firstName, lastName, optionSelected, optionId, service } = req.body

  try{
    const client = await Clients.create({ firstName, lastName, optionSelected, optionId, service })
    res.status(200).json(client)
  } catch (err) {
    res.status(404).json({ error: err.message})
  }
}

module.exports = { createClient, getClients }
