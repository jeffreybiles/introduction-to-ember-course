module.exports = function(app, db) {
  app.get('/api/monsters', function(req, res){
    db.find({}, function(err, docs){
      res.send({monsters: docs});
    });
  });

  app.post('/api/monsters', function(req, res){
    insertMonster(req.params)
    res.send(201)
  })

  app.put('api/monsters/:id', function(req, res){
    console.log('doin it',req, res)
    db.update({id: req.id}, {$set: req.params}, function(){
      res.send(200)
    })
  })
};
