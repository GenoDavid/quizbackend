const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {

        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }

})
module.exports = mongoose.model('user', userschema)