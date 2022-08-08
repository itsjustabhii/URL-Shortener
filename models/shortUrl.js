const mongoose = require('mongoose')
const shortId = require('shortid')  //generates unique shortid


const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    }, 
    short: {
        type: String,
        required:true,
        defualt: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)


















