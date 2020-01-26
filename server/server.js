const app = require('express')();
const http = require('http');
const server = http.createServer(app);
var port = 3000;
var io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log('new user connected');
    socket.on('newMessage', (data) => {
        io.emit('newMessage', data)

    })
    io.on('disconnect', () => {
        console.log('user disconnected')
    })

})



server.listen(port, () => `listening to ${port}`)
