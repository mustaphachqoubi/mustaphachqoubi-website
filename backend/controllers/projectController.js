const Projects = require('../models/projectsModel.js')
const mongoose = require('mongoose')

// get all proojects
const getAllProjects = async (req, res) => {
  const projects = await Projects.find({}).sort({createdAt: -1})

  res.status(200).json(projects)
}

// get a single project 
const getSingleProject = async (req, res) => {
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: "id is not valid"})
  }

  const project = await Projects.findById(id)
  
  if(!project){
    return res.status(404).json({error: 'There is no project found'})
  }

  res.status(200).json(project)
}

// create a signle project 
const createNewProject = async (req, res) => {
  const { name, img, live, sourceCode } = req.body
  
  if(!name || !img || !live || !sourceCode){
    res.status(400).json({error: "you didn't provide a required properety !"})
  }else{
    try{
    const projects = await Projects.create({ name, img, live, sourceCode })
    res.status(200).json(projects)
  } catch (err){
    res.status(400).json({error: err})
  }
  }
}

// update a single project 
const updateProject = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: "id is not valid"})
  }

  const project = await Projects.findOneAndUpdate({_id: id}, {...req.body})
  
  if(!project){
    return res.status(404).json({error: 'There is no project found'})
  }

  res.status(200).json(project)
}

// delete a single project 
const deleteProject = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json( { error: "id is not valid" } )
  }

  const project = await Projects.findOneAndDelete( { _id : id} )

  if(!project){
    return res.status(404).json( { error: "no project found" } )
  }

  res.status(200).json(project)
} 

module.exports = {
  getAllProjects,
  createNewProject,
  getSingleProject,
  updateProject,
  deleteProject
}
