var mymodule = require('./mymodule');

var path = process.argv[2];
var ext = process.argv[3];

//console.log(path);
//console.log(ext);

mymodule(path, ext, function(err, data){
	if(err) throw err;
	for(i = 0; i < data.length; i++){
		console.log(data[i]);
	}
});



// console.log(mymodule.getList(path, ext, )