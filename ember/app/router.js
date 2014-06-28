import Ember from 'ember';

var Router = Ember.Router.extend({
  location: IntroductionToEmberCourseENV.locationType
});

Router.map(function() {
  this.resource('monsters', {path: '/monsters'}, function(){
    this.resource('monster', {path: ':monster_id'});
  });
});

export default Router;
