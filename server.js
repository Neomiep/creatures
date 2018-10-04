const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()
mongoose.connect('mongodb://localhost/creatureDB', function() {console.log("Connected")})
app.listen(8080)

let creatureApi = require("./creatureApi.js")

app.use(express.static("node_modules"))
app.use(express.static("public"))

app.use("/creatures", creatureApi)