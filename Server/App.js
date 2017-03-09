const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connection=mongoose.connect('mongodb://localhost/Database_CI');
const http = require('http');
const port = process.env.PORT || 9080;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

function createApp() {
  const app = express();
  return app;
}

const server = http.createServer(app);
server.listen(port, () => {

    console.log('Express server started');
});
