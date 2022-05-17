const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type : Number,
        reqired : true
    }
})

const User = mongoose.model('BUDGET', userSchema)

module.exports = User;