const asyncHandler = require('express-async-handler')
const Room = require('../models/Room')

// @description create new room
// @route       Post api/rooms/
// @access      Public
const createRoom = asyncHandler(async (req, res) => {
    const { name, type, cost, note, status } = req.body

    if (!name || !type || !cost || !note || !status) {
        res.status(400)
        throw new Error('Please add all field')
    }
    // Create room
    const room = await Room.create({
        name,
        type,
        cost,
        note,
        status
    })

    if (room) {
        res.status(201).json(room)
    } else {
        res.status(400)
        throw new Error('Invalid room data')
    }

    res.json({ message: 'Create new room' })
})

// @description Delete room
// @route       Delete api/rooms
// @access      Public
const deleteRoom = asyncHandler(async (req, res) => {
    const {id} = req.body;

    await Room.deleteOne({_id: id});
    res.json({message: 'delete successfully'})
})

// @description Get all rooms
// @route       Get api/rooms/getallrooms
// @access      Public
const getAllRooms = asyncHandler(async (req, res) => {
    const foundRooms = await Room.find();

    if (foundRooms) {
        res.status(201).json(foundRooms)
    } else {
        res.status(400)
        throw new Error('Can not get all room data')
    }

})

module.exports = {
    createRoom,
    deleteRoom,
    getAllRooms
}