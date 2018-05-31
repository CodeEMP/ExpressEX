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
  response.send('Hello World!');
});

app.listen(8080, function () {
    console.log('Listening on port 8080');
});