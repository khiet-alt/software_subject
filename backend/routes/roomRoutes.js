const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const { createRoom, deleteRoom, getAllRooms } = require('../controllers/roomController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', createRoom)
router.delete('/', protect, deleteRoom)
router.get('/getallrooms', getAllRooms)

module.exports = router