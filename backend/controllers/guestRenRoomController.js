const asyncHandler = require('express-async-handler')
const GuestRentRoom = require('../models/GuestRentRoom')

// @description create new category room
// @route       Post pages/roomcategory
// @access      Public
const createGuestRentRoom = asyncHandler(async (req, res) => {
    const { STT, guestName, guestType, ID, address } = req.body

    if (!STT || !guestName || !guestType || !ID || !address) {
        res.status(400)
        throw new Error('Please add all field')
    }
    // Create guestrenroom
    const guestRentRoom = await GuestRentRoom.create({
        STT,
        guestName,
        guestType,
        ID,
        address,
    })

    res.status(200).json(guestRentRoom) 
})

// @description Delete category room
// @route       Delete pages/roomcategory/:id
// @access      Public
const deleteGuestRentRoom = asyncHandler(async (req, res) => {
    const guestRentRoom = await GuestRentRoom.findById(req.params.id)
  
    if (!guestRentRoom) {
      res.status(400)
      throw new Error('Room not found')
    }
  
    await guestRentRoom.remove()
  
    res.status(200).json({ id: req.params.id })
  })

// @description Get all category room
// @route       Get pages/roomcategory
// @access      Public
const getAllGuestRentRoom = asyncHandler(async (req, res) => {
    const foudGuestRentRoom = await GuestRentRoom.find();

    if (foudGuestRentRoom) {
        res.status(201).json(foudGuestRentRoom)
    } else {
        res.status(400)
        throw new Error('Can not get all category room data')
    }

})

module.exports = {
    createGuestRentRoom,
    deleteGuestRentRoom,
    getAllGuestRentRoom
}