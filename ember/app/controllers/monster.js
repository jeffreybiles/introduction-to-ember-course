import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: true,

  actions: {
    heal: function(){
      this.get('model').changeHealthBy(5);
    },

    fight: function(){
      this.get('model').changeHealthBy(-5);
    },

    edit: function(){
      this.set('isEditing', true);
    },

    update: function(){
      this.set('isEditing', false);
    }
  }
});
