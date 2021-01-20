const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
     useUnifiedTopology: true, 
     useNewUrlParser: true,
    }
);

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`)
});