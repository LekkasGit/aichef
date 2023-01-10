const time = require("../modules/time");

var express = require("express");
var router = express.Router();

router.get('/', function (req, res) {
   res.send(time.prefix() + "GET route on things");
});

router.post('/', function (req, res) {
   res.send(time.prefix() + "POST route on things");
});

module.exports = router;