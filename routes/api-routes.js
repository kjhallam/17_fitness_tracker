const db = require('../models');

module.exports = function (app) {
    app.get('/api/workouts', (req, res) =>{
        db.Workout.find({}).then(dbWorkout =>{
            dbWorkout.forEach(workout =>{
                let total = 0;
                workout.exercises.forEach(e =>{
                    total += e.duration;
                });
                workout.totalDuration = total;
            });
            res.json(dbWorkout);
        }).catch (err => {
            console.log(err);
        });
    });

    app.put('/api/workouts/:id', (req, res) => {
        db.Workout.findOneAndUpdate(
            {_id: req.params.id },
            {
              $inc: { totalDuration: req.body.durations },
              $push: { exercises: req.body }  
            },
            { new: true }).then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                console.log(err);
            });
    });

    app.post('/api/workouts', ({ body }, res) => {
        db.Workout.create(body).then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            console.log(err);
        });
    });

    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find().then((dbWorkout => {
            res.json(dbWorkout);
            console.log('LIST ALL WORKOUTS');
        })).catch(err => {
            console.log(err);
        });

    });
       
}
