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
        type: Number,
        required: [true, 'Please add a cost']
    },
    note: {
        type: String,
        required: [false]
    },
}, {
    timestamps: true
})


module.exports = mongoose.model('CategoryRoom', categoryRoomSchema)