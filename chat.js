const express = require('express');

const socketio = require('socket.io');
const { static } = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(3000);
const io = socketio(expressServer);

io.on('connection', (socket) => {
    socket.emit('messageFromServer', {data: 'Welcome to the socket io server'});
    socket.on('messageToServer', dataFromClient => {
        // console.log(dataFromClient)
    })
    socket.on('newMessageToServer', msg => {
        // console.log(msg);
        io.emit('newMessageToClients', {text: msg.text})
    })
})