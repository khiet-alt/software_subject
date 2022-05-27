const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
    roomID: {
        type: Number,
        required: [true, 'Please add room ID']
    },
    numberOfDate: {
        type: Number,
        required: [true, 'Please add number of dates client hired'],
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    finalPrice: {
        type: Number,
        required: [false]
    },
}, {
    timestamps: true
})


module.exports = mongoose.model('Bill', billSchema)