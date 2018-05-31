var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

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

app.listen(8080, function () {
    console.log('Listening on port 8080');
});