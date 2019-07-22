const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    zipDest: Number,
    zipStart: Number,
    latStart: Number,
    longStart: Number,
    travelTime: Number,
    latDest: Number,
    longDest: Number

})



module.exports = mongoose.model('Trip', tripSchema)