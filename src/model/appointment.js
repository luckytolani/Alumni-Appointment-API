const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    user:{
        type:Number,
        require:true,
    },
    date:{
        type: String,
        required:true,
    },
    slot:{
        type: Number,
        required:true,
    }

})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment