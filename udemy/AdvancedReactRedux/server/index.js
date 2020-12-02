// Main  staring point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const router = require('./router');

// DB Setup
// Use these option to elemenate deprication warnings. { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true}
mongoose.connect('mongodb://mongo:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true});

// App setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
