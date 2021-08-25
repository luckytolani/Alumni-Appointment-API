const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    user:{
        type:String,
        require:true,
    },
    date:{
        type: Date,
        required:true,
    },
    slot:{
        type: Number,
        required:true,
    },
    pending:{
        type: Boolean,
        required: true,
        default:true,
    }
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment