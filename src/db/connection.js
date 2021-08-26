const mongoose = require('mongoose')

//DataBase Connection

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected successfully")
}).catch((e) => {
    console.log(e);
})