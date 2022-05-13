const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
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
    status: {
        type: String,
        required: [true, 'Please add a status']
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Room', roomSchema)