const mongoose = require('mongoose');
require('dotenv').config()

const urlDB = process.env.MONGO_DB
async function connectDB() {
    try {
        await mongoose.connect(urlDB)
        console.log('connect success')
    } catch (error) {

    }
}