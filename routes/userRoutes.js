const express = require('express')
const { userControllers, createUsers } = require('../controllers/userControllers')

// Init Express
const router = express.Router()

// Get All Users
router.get('/', userControllers)

// Create New Users
router.post('/', createUsers)


// Export Route
module.exports = router