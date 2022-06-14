const mongoose = require('mongoose')

const guestRenRoomSchema = mongoose.Schema({
    STT: {
        type: String,
        required: [true, 'Please add a name']
    },
    guestName: {
        type: String,
        required: [true, 'Please add a type'],
    },
    guestType: {
        type: String,
        required: [true, 'Please add a cost']
    },
    ID: {
        type: String,
        required: [true, 'Please add a cost']
    },
    address:{
        type: String,
        required: [true, 'Please add a cost']
    }
})


module.exports = mongoose.model('GuestRentRoom', guestRenRoomSchema)