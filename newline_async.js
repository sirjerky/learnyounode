var fs = require('fs');
var data = fs.readFile(process.argv[2], 'utf-8', function(err, stuff){
	if(err) throw err;
	//console.log(stuff);
	var lines = stuff.split('\n');
	console.log(lines.length -1);
});

//var lines = data.split('\n');
//console.log(lines.length -1);