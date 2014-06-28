import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('monster', params.monster_id);
  }
});
