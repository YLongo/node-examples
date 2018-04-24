var b = new Buffer(10000);

var str = "Node.js 实战";


b.write(str);
console.log(b.length); 
console.log(b.toString('utf8'))
console.log(str.length);
console.log(Buffer.byteLength(str));

var str1 = new Buffer("Node.js 实战");
var str2 = new Buffer(".pdf");

var concat_str = Buffer.concat([str1, str2]);

console.log(concat_str.toString("utf8"));

concat_str.fill("\0");

console.log("file: " + concat_str.toString("utf8"));
