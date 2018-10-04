const mongoose = require('mongoose');
const Schema = mongoose.Schema

let creatureSchema = new Schema({
    name : String,
    creatureType: String
})

let Creature = mongoose.model("creature",creatureSchema)

module.exports = Creature