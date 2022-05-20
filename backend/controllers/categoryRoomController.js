const asyncHandler = require('express-async-handler')
const CategoryRoom = require('../models/categoryRoom')

// @description create new category room
// @route       Post api/pages/roomcategory
// @access      Public
const createCategoryRoom = asyncHandler(async (req, res) => {
    const { name, type, cost, note } = req.body

    if (!name || !type || !cost || !note) {
        res.status(400)
        throw new Error('Please add all field')
    }
    // Create CategoryRoom
    const categoryroom = await CategoryRoom.create({
        name,
        type,
        cost,
        note
    })

    if (categoryroom) {
        res.status(201).json(room)
    } else {
        res.status(400)
        throw new Error('Invalid category room data')
    }

    res.json({ message: 'Create new category room.' })
})

// @description Delete category room
// @route       Delete api/pages/roomcategory/:id
// @access      Public
const deleteCategoryRoom = asyncHandler(async (req, res) => {
    const {id} = req.body;

    await CategoryRoom.deleteOne({_id: id});
    res.json({message: 'delete successfully'})
})

// @description Get all category room
// @route       Get api/pages/roomcategory
// @access      Public
const getAllCategoryRoom = asyncHandler(async (req, res) => {
    const foundCategoryRooms = await CategoryRoom.find();

    if (foundCategoryRooms) {
        res.status(201).json(foundCategoryRooms)
    } else {
        res.status(400)
        throw new Error('Can not get all category room data')
    }

})

module.exports = {
    createCategoryRoom,
    deleteCategoryRoom,
    getAllCategoryRoom
}