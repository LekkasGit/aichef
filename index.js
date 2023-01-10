var express = require("express");
var app = express();

app.get("/", function (req, res) {
    currentTime = new tDate().toISOString().replace('T', ' ').substr(0, 19)
    res.send(`[${currentTime}]: Hello World!`)
})

app.listen(3000);