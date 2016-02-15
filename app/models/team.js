import Ember from 'ember';
const { computed, computed: { not } } = Ember;
const { reads, filterBy, gt } = computed;

export default Ember.Object.extend({
  stats: Ember.inject.service(),
  id: '',
  sportId: '',
  name: reads('id'),

  attempts: computed('stats.attempts.[]', function() {
    return this.get('stats.attempts').filterBy('teamId', this.get('id'));
  }),

  successfulAttempts: filterBy('attempts', 'isSuccess'),
  isSuccess: gt('successfulAttempts.length', 0),
  isNotSuccess: not('isSuccess')
});
