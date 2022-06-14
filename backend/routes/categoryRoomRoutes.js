const express = require('express')
const router = express.Router()

const {
    createCategoryRoom,
    deleteCategoryRoom,
    getAllCategoryRoom,
} = require('../controllers/categoryRoomController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getAllCategoryRoom).post(createCategoryRoom)
router.route('/:id').delete(protect, deleteCategoryRoom)

module.exports = router