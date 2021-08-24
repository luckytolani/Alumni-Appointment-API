const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://lucky:lucky@cluster0.mojdf.mongodb.net/task?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected successfully")
}).catch((e) => {
    console.log(e);
})