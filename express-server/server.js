const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



require('./app/socket')(io);
require('./app/router')(app,io);



http.listen(3000, function () {
    console.log('listening on *:3000');
  });