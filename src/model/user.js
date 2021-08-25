const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user:{
        type:String,
        require:true,
    },
    password:{
        type: String,
        required:true,
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User