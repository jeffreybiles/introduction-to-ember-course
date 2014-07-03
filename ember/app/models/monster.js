import DS from 'ember-data';

var Monster = DS.Model.extend({
  name: DS.attr('string'),
  level: DS.attr('number'),
  imageUrl: DS.attr('string'),
  currentHp: DS.attr('number'),
  maxHp: DS.attr('number'),

  conscious: function(){
    return this.get('currentHp') > 0;
  }.property('currentHp'),

  changeHealthBy: function(amount){
    var newHp = this.get('currentHp') + amount;
    var maxHp = this.get('maxHp');
    if(newHp < 0){
      newHp = 0;
    } else if(newHp > maxHp){
      newHp = maxHp;
    }
    this.set('currentHp', newHp);
  }
});

Monster.FIXTURES = [
  {id: 1, name:'Sparkachu', level:3, imageUrl: 'http://fc09.deviantart.net/fs70/f/2012/055/c/4/pikachu_in_a_jumper_by_tymib12-d4qucxc.jpg', maxHp: 29, currentHp: 12},
  {id: 2, name: 'Charember', level: 5, imageUrl: 'http://fc05.deviantart.net/fs70/f/2011/363/a/3/charmander_by_chikokishimaru-d4kmymm.jpg', maxHp: 54, currentHp: 54},
  {id: 3, name: 'Blastasaur', level: 28, imageUrl: 'http://fc00.deviantart.net/fs70/f/2013/026/d/9/squirtle___pokemon_by_imjustbauss-d5srgwp.jpg', maxHp: 219, currentHp: 0}
];

export default Monster;