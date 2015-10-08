import Ember from 'ember';
const { computed } = Ember;
const { reads } = computed;

export default Ember.Object.extend({
  stats: Ember.inject.service(),

  id:'',
  name: reads('id'),

  teams: computed('stats.teams.[]', function() {
    return this.get('stats.teams').filterBy('sportId', this.get('id'));
  })
});
