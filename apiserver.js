var http = require('http');
var url = require('url');

var routes=function(data){
	if(data.pathname === '/api/parsetime'){
		var d = new Date(data.query.iso);
		return {
			hour: d.getHours(),
			minute: d.getMinutes(),
			second: d.getSeconds()
		};
	} if(data.pathname === '/api/unixtime'){
			return{
				unixtime: (new Date(data.query.iso)).getTime()
			}
		}
};

var server = http.createServer(function(req, res){
	var parsedUrl = url.parse(req.url, true);
	var myjson = routes(parsedUrl);
	console.log('create server');
	if (myjson){
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(JSON.stringify(myjson));
	} else {
		res.writeHead(404);
		res.end();
	}

});

server.listen(process.argv[2], function(){
	console.log('server started');
});