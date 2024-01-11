const mongoose = require('mongoose')
const Schema = mongoose.Schema


//new users are only created when a guess is properly entered.
const wordsSchema = new Schema({
    name: { Type: String },
    possibleWords: [String],
    usedWords: [String]
})

module.exports = mongoose.model('Words', wordsSchema)