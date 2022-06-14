const mongoose = require('mongoose')

const categoryRoomSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    type: {
        type: String,
        required: [true, 'Please add a type'],
    },
    cost: {
        type: String,
        required: [true, 'Please add a cost']
    },
    note: {
        type: String,
        required: [false]
    },
})


module.exports = mongoose.model('CategoryRoom', categoryRoomSchema)