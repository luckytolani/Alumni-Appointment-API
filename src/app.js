const express = require('express')
require('./agenda')
const cors = require('cors')
const approuter = require("./router/appointment")
const userrouter = require("./router/user")
require('./db/connection')
const app = express()
app.use(express.json())
app.use(cors())
app.use(approuter)
app.use(userrouter)

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`app is running on ${port}`);

})