const mongoose = require('mongoose')
const Schema = mongoose.Schema


//new users are only created when a guess is properly entered.
const ChristmasUserSchema = new Schema({
    name: { type: String },
    secretSanta: { type: String },
    available: { type: Boolean }
})

module.exports = mongoose.model('ChristmasUser', ChristmasUserSchema)