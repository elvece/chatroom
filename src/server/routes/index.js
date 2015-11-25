var express = require('express');
var router = express.Router();
//*** socket.io *** //
// var server = require('http').Server(express);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

io.on('connection', function(socket){
  console.log("someone entered the chat room!");
});

module.exports = router;
