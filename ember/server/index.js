// To use it create some files under `routes/`
// e.g. `server/routes/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

var bodyParser = require('body-parser');
var globSync   = require('glob').sync;
var routes     = globSync('./routes/**/*.js', { cwd: __dirname }).map(require);

var _ = require('lodash');
var Datastore = require('nedb')
  , db = new Datastore({ filename: 'database', autoload: true });

db.insertMonster = function(params){
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

module.exports = function(app) {
  routes.forEach(function(route) { route(app, db); });
};
