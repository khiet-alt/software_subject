const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
    roomID: {
        type: Int32Array,
        required: [true, 'Please add room ID']
    },
    numberOfDate: {
        type: Int32Array,
        required: [true, 'Please add number of dates client hired'],
    },
    price: {
        type: Int32Array,
        required: [true, 'Please add a price']
    },
    finalPrice: {
        type: Int32Array,
        required: [false]
    },
}, {
    timestamps: true
})


module.exports = mongoose.model('Bill', billSchema)