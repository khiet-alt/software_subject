const express = require('express')
const router = express.Router()

const {
    createBill,
    deleteBill,
    getAllBills,
} = require('../controllers/billControler')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, createBill).post(protect, getAllBills)
router.route('/:id').delete(protect, deleteBill)

module.exports = router