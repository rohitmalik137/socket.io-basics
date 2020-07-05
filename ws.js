const http = require('http');

// const websocket = require('ws');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('i am connected')
});

// const wss = new websocket.Server({server})
// wss.on('headers', (headers, req) => {
//     console.log(headers);
// })

const io = socketio(server);

io.on('connection', (socket, req) => {
    socket.emit('welcome', 'welcome to the web socket server!!')
    socket.on('message', (msg) => {
        console.log(msg);
    })
})


server.listen(3000);