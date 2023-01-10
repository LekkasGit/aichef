var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', "./views")

app.use(express.static('public'));

app.get('/components', function(req,res) {
    res.render('home');
});

app.listen(3000);