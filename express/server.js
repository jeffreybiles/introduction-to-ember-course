var express = require('express');
var app = express();

var Datastore = require('nedb')
  , db = new Datastore({ filename: 'database', autoload: true });

app.get('/api/monsters', function(req, res){
  db.find({}, function(err, docs){
    res.send(docs);
  });
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});