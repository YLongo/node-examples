
var fs = require("fs");

var contents;

var rs = fs.createReadStream("simple_stream.js");

rs.on(
	'readable', 
	function () {
		var str;
		var d = rs.read();
		if (d) {
			if (typeof d == 'stirng') {
				str = d;
			} else if (typeof d == 'object' && d instanceof Buffer) {
				str = d.toString('utf8');
			}

			if (str) {
				if (!contents) {
					contents = d;
				} else {
					contents += str;
				}
			}
		}
});

rs.on('end', function () {
	console.log("read in the file contents");
	console.log(contents.toString('utf8'));
});