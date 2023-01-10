var express = require("express");
var app = express();

const time = require("./source/modules/time");

console.log(time.prefix() + "Program run");

app.get("/", function (req, res) {
    res.send(time.prefix() + "Hello world!")
})

app.listen(3000);