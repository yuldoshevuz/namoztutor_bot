const mongoose = require('mongoose')
const { DB_URI } = require('./environments')
const errorHandler = require('../helpers/errorHandler')

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log('DB connected successfully')
    } catch (error) {
        errorHandler(error)
    }
}

connectDB()