var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(req, res){
	console.log("server started");
	var stream = fs.createReadStream(file);
	stream.on('open', function(){
		stream.pipe(res);
	})
});

server.listen(port, function(){
	console.log('listening on port: ' + port);
});