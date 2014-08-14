var path = require('path');
var fs = require('fs');

module.exports = function(data, ext, callback){
	fs.readdir(data, function(err, stuff){
		if(err){
			return callback(err);
		} 
		var files=[];
			stuff.forEach(function(item){
			if(path.extname(item) === "." + ext){
				files.push(item);
			}
		});
			return callback(null, files);
	});
}

