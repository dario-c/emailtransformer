var express = require('express');
var app = express();
var http = require('http');

app.use("/game", express.static(__dirname + '/game'));
app.use("/tests", express.static(__dirname + '/tests'));

app.use(express.bodyParser());

app.get('/', function(req, res){
  res.redirect('/game/index.html');
});

app.get('/get_data', function(req, res){
  var data = {name: 'John', surname: 'Connor'};
  res.send(JSON.stringify(data));
});

var allScores = {};
app.post('/sendScore', function(req, res){
  allScores[req.body.playerName] = req.body.score;
  console.log(req.body);
  res.send(JSON.stringify({status:1}));
});
app.get('/getScores', function(req, res){
  console.log('getting Scores!', allScores);
  res.send(JSON.stringify(allScores));
});
app.get('/startGame', function(req, res){
  allScores = {};
  res.send(JSON.stringify({status:1}));
});
app.get('/stopGame', function(req, res){
  allScores = {};
  res.send(JSON.stringify({status:1}));
});

console.log('Server running on port 3000');
app.listen(3000);
