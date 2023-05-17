const express = require('express')
const router = express.Router()
const { 
  getAllProjects,
  createNewProject,
  getSingleProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController.js')


// get all proojects
router.get('/', getAllProjects) 
// get a single prooject 
router.get('/:id', getSingleProject)
// create a signle project 
router.post('/', createNewProject)
// update a single project 
router.patch('/:id', updateProject)
// delete a single project 
router.delete('/:id', deleteProject)

module.exports = router
