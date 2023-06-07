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

// delete client
const deleteClients = async (req, res) => {
  const clients = await Clients.deleteMany({})

  if(!clients){
    res.status(404).json({ error: "the delete process failed" })
  }

  res.status(200).json(clients)
}

module.exports = { createClient, getClients, deleteClients }
