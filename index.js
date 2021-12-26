const express = require('express');
const routes =  require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();
// connect to mongodb
mongoose.connect('mongodb://localhost/blog');
mongoose.Promise = global.Promise;
app.use(express.static('public'));
app.use(bodyParser.json());

// initialize routes
app.use('/api',routes);

// error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message})
})
// listen for requests
app.listen(process.env.port || 4000, () => {
    console.log("LİSTENINING");
});