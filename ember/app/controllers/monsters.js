import Ember from 'ember';

export default Ember.ArrayController.extend({
  monsterCount: function(){
    return this.get('model.length');
  }.property('@each'),

  consciousMonsterCount: function(){
    return this.get('model').filterBy('conscious').get('length');
  }.property('@each.conscious')
});
