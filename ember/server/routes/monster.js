module.exports = function(app, db) {
  app.get('/api/monsters', function(req, res){
    db.find({}, function(err, docs){
      console.log('im in yer monster, logging yer console', docs)
      res.send({monsters: docs});
    });
  });

  app.post('/api/monsters', function(req, res){
    insertMonster(req.params)
    res.send(201)
  })

  app.post('api/monsters/:id', function(req, res){
    db.update({id: req.id}, {$set: req.params}, function(){
      res.send(200)
    })
  })
};
