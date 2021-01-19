const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')

const Exercise = require('./models/Exercise')




app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/exercise_tracker',
 {
     useUnifiedTopology: true, 
     useNewUrlParser: true
    }
)

app.get('/api/test', (req, res) => {
    Exercise.find({}, function(err, data){
        if(err)console.log(err)
        res.json(data)
    })
})

app.post('/api/test', (req,res) => {
   

    Exercise.create(req.body, function(err, data){
        if(err) {
            console.log(err)
        }
        res.json(data)
        console.log('success --> ', newExercise)
    })

})



app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`)
})