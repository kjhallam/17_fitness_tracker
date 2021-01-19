const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const exerciseSchema = new Schema({
//name, type, weight, sets, reps, and duration of exercise
    name: String,
    type: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise;