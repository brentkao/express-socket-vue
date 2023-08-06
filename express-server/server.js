const express = require('express');
const { send } = require('process');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const path = require('path')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.get('/', function(req, res) {
  console.log("123");
  res.sendFile(path.join(__dirname, 'index.html'));
});



require('./app/socket')(io);
require('./app/router')(app,io);



http.listen(port, function () {
    console.log('listening on *:'+port);
  });