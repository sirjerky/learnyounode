var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer(function(socket){
	console.log("server connected port: " + port);
	socket.end(strftime('%Y-%m-%d %R' + '\n'));
});

server.listen(port, function(){
	console.log('server bound')
});