var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    redis = require("redis"),
    client = redis.createClient();

server.listen(8080);

// Send one page app
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

// Initiate socket API
io.sockets.on('connection', function (socket) {
    
    socket.emit('quelque chose', { hello: 'prout' });
    
    socket.on('', function (data) {
        console.log(data);
    });
});
