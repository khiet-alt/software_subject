const express = require('express')
const router = express.Router()

const {
    createGuestRentRoom,
    deleteGuestRentRoom,
    getAllGuestRentRoom,
} = require('../controllers/guestRenRoomController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getAllGuestRentRoom).post(protect, createGuestRentRoom)
router.route('/:id').delete(protect, deleteGuestRentRoom)

module.exports = router