const express = require('express')
require('./agenda')
const cors = require('cors')
const approuter = require("./router/appointment")
require('./db/connection')
const app = express()
app.use(express.json())
app.use(cors())
app.use(approuter)

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`app is running on ${port}`);

})