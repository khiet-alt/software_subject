const express = require('express')
const router = express.Router()

const {
    createCategoryRoom,
    deleteCategoryRoom,
    getAllCategoryRoom,
} = require('../controllers/categoryRoomController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, createCategoryRoom).post(protect, getAllCategoryRoom)
router.route('/:id').delete(protect, deleteCategoryRoom)

module.exports = router