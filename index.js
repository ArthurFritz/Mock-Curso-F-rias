var express = require('express');
var validation = require('express-validator');
var bodyParser = require('body-parser');
var app = express();
var usuario = require('./routes/usuario');
var login = require('./routes/login');
var disciplinas = require('./routes/disciplinas');
var relatorio = require('./routes/relatorio');

const PATH = "/api/v1/";

app.options("*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});

app.get('/', function (req, res) {
  res.send('Mock works!');
});
app.use(validation());
app.use(bodyParser.json());
app.use(PATH+'usuarios', usuario);
app.use(PATH+'login', login);
app.use(PATH+'disciplinas', disciplinas);
app.use(PATH+'relatorio', relatorio);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('Example app listening on port ',app.get('port'));
});