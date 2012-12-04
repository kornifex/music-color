var express = require('express'),
    app = express.createServer(),
    io = require('socket.io').listen(app),
    redis = require("redis"),
    client = redis.createClient();

app.listen(80);

// Send one page app
app.use(express.static(__dirname + '/public'));

// Initiate socket API
io.sockets.on('connection', function (socket) {
    
    socket.emit('quelque chose', { hello: 'prout' });
    
    socket.on('', function (data) {
        console.log(data);
    });
});
