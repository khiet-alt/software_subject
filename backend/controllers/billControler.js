const asyncHandler = require('express-async-handler')
const Bill = require('../models/Bill')

// @description Create new bill
// @route       Post api/pages/billform
// @access      Public
const createBill = asyncHandler(async (req, res) => {
    const { roomID, numberOfDates, price, finalPrice } = req.body

    if (!roomID || !numberOfDates || !price || !finalPrice) {
        res.status(400)
        throw new Error('Please add all field')
    }
    // Create Bill
    const bill = await Bill.create({
        roomID,
        numberOfDates,
        price,
        finalPrice
    })

    if (bill) {
        res.status(201).json(room)
    } else {
        res.status(400)
        throw new Error('Invalid bill data')
    }

    res.json({ message: 'Create a new bill.' })
})

// @description Delete bill
// @route       Delete api/pages/billform/:id
// @access      Public
const deleteBill = asyncHandler(async (req, res) => {
    const {id} = req.body;

    await Bill.deleteOne({_id: id});
    res.json({message: 'Delete successfully'})
})

// @description Get all bills
// @route       Get api/pages/bills
// @access      Public
const getAllBills = asyncHandler(async (req, res) => {
    const foundBills = await Bill.find();

    if (foundBills) {
        res.status(201).json(foundBills)
    } else {
        res.status(400)
        throw new Error('Cannot get all bills data')
    }

})

module.exports = {
    createBill,
    deleteBill,
    getAllBills
}