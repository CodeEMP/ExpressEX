var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
const body_parser = require('body-parser');

app.use(body_parser.urlencoded({extended: false}));
app.use(express.static('public'));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});

app.get('/', function (request, response) {
  var name = request.query.name || 'World';
  var context = {title: 'Hello', name: name};
  response.render('index.html', context);
});

app.get('/form', function(request, response) {
  response.render('form.html');
});

app.post('/submit', function (request, response) {
  console.log(request.body);
  response.send('OK');
});

app.listen(8080, function () {
    console.log('Listening on port 8080');
});