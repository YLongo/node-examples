var express = require("express");

var app = express();

app.get("/", function(req, res) {
	res.end("hello world");
});


app.get("/get", function(req, res) {
	res.send("Hello world");
});


app.post("/post", function(req, res) {
	res.send("Post Hello World");
});

app.use(express.static("public"));

app.use(function(req, res, next) {
	res.status(404).send("page is not find");
});


app.listen(8080);