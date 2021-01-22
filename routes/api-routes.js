const db = require('../models');

module.exports = function (app) {
    app.post('/api/workouts', ({ body }, res) => {
        db.Workout.create(body).then(workout => {
            res.json(workout);
        }).catch(err => {
            console.log(err);
        });
    });

    app.get('/api/workouts', (req, res) =>{
        db.Workout.find({}).then(workouts =>{
            console.log(workouts);
            workouts.forEach(workout =>{
                let total = 0;
                workout.exercise.forEach(e =>{

                    total += e.duration;
                });
                workout.totalDuration = total;
            });
            res.json(workouts);
            }).catch (err => {
            console.log(err);
        });
    });

    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find().then((workouts => {
            res.json(workouts);
            console.log('LIST ALL WORKOUTS');
        })).catch(err => {
            console.log(err);
        });

    });

    app.put('/api/workouts/:id', (req, res) => {
        db.Workout.findOneAndUpdate(
            {_id: req.params.id },
            {
              //$inc: { totalDuration: req.body.durations },
              $push: { exercise: req.body }  
            },
            { new: true }).then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                console.log(err);
            });
    });
       
}
