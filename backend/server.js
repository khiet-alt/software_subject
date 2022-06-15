const path = require('path')
const express = require('express')
require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 5000
var cors = require('cors')

var corsOptions = {
    origin: '*'
}


const { errorHandler } = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')

connectDB()

const app = express()

// app.use: using middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

// route
app.use("/api/users", require('./routes/userRoutes'))
app.use("/api/rooms", require('./routes/roomRoutes'))
app.use("/pages/roomcategory", require('./routes/categoryRoomRoutes'))
app.use("/pages/guestrentroom", require('./routes/guestRentRoom'))
app.use("/pages/billform", require('./routes/billRoutes'))


// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started onport ${[port]}`)
})