const express = require('express')
const router = express.Router()
const { 
  getAllProjects,
  createNewProject,
  getSingleProject
} = require('../controllers/projectController.js')


// get all proojects
router.get('/', getAllProjects) 
// get a single prooject 
router.get('/:id', getSingleProject)
// create a signle project 
router.post('/', createNewProject)
// update a single project 
// delete a single project 

module.exports = router
