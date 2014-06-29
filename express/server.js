var express = require('express');
var app = express();
var _ = require('lodash');
var Datastore = require('nedb')
  , db = new Datastore({ filename: 'database', autoload: true });

var insertMonster = function(params){
  db.find({}, function(err, docs){
    var last_id
    if(docs.length == 0){
      last_id = 0
    } else {
      docs = _.sortBy(docs, 'id')
      last_id = docs[docs.length - 1].id
    }
    params['id'] = last_id + 1
    db.insert(params)
  })
}

app.get('/api/monsters', function(req, res){
  db.find({}, function(err, docs){
    res.send({monsters: docs});
  });
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});