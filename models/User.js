const mongoose = require('mongoose')
const Schema = mongoose.Schema


//new users are only created when a guess is properly entered.
const userSchema = new Schema({
    name: { type: String },
    group: { type: String },
    attempted: { type: Number, default: 0 },
    failed: { type: Number, default: 0 },
    solved: { type: Number, default: 0 },
    totalGuesses: { type: Number, default: 0 },
    missed: { type: Number, default: 0 },
    failed: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    completedToday: {
        type: Boolean,
        default: false
    },
    lastPlayed: { type: String }
})

module.exports = mongoose.model('User', userSchema)