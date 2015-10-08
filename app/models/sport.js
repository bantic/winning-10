import Ember from 'ember';
const { computed } = Ember;
const { reads } = computed;

export default Ember.Object.extend({
  stats: Ember.inject.service(),

  id:'',
  name: reads('id'),

  imageUrl: computed('id', function() {
    const id = this.get('id');
    return `/images/${id.toLowerCase()}.png`;
  }),

  teams: computed('stats.teams.[]', function() {
    return this.get('stats.teams').filterBy('sportId', this.get('id'));
  })
});
