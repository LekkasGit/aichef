const time = require("./source/modules/time.js");
const test = require("./source/modules/test.js")

var express = require("Express");
var app = express();
var routes = require("./source/website/routes.js")

console.log(time.prefix() + "Program run");
console.log(time.prefix() + test.OpenAI());

app.use("/", routes);

app.get("/", function (req, res) {
    res.send(time.prefix() + "Hello world!");
});

app.listen(3000);