var http = require('http');
var bl = require('bl');
var async = require('async');

var urls = process.argv.slice(2);

var getHttp = function(path, doneCallback){
	http.get(path, function(response){
		response.pipe(bl(function(err, data){
			if(err) console.log(err);
			return doneCallback(null, data);
		}))
	});
}

async.map(urls, getHttp, function(err, results){
	results.forEach(function(line){
		console.log(line.toString());
	})
});