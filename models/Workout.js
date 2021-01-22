const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
//name, type, weight, sets, reps, and duration of exercise
day: {
    type: Date,
    default: new Date().setDate(new Date().getDate()),
},
exercise: [{
    type: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    weight: {
        type: Number,
        default: 0,
    },
    reps: {
        type: Number,
        default: 0,
    },
    sets: {
        type: Number,
        default: 0,
    },
    duration: Number,
    distance: {
        type: Number,
        default: 0,
    }
}],
// totalDuration: {
//     type: Number,
//     default: 0,
// }
   
});

const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout;