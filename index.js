var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', "./views")

app.use(express.static('public'));

/*
app.get('/first_template', function(req, res){
    res.render('first_view');
});
*/
/*
app.get('/dynamic_view', function(req, res){
    res.render('dynamic', {
        name: "TutorialPoint",
        lol: "lol?"
    });
});
*/

app.get('/components', function(req,res) {
    res.render('home');
});

app.listen(3000);