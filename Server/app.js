
const express = require('express');
const app = express();
const port = process.env.PORT || 9080;
const createSurveyConfigRoute=require('./route/createSurvey.route')
const http = require('http');
const mongoose = require('mongoose');
const connection=mongoose.connect('mongodb://localhost/Survey_Details');

var BodyParser = require('body-parser');
app.use(BodyParser());


app.use('/',createSurveyConfigRoute);

const server = http.createServer(app);
server.listen(port, () => {

    console.log('Express server started');
});
