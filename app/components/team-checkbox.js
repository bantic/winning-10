import Ember from 'ember';
const { computed: { reads } } = Ember;

export default Ember.Component.extend({
  classNames: ['team-checkbox'],
  classNameBindings: ['isSuccess'],

  isSuccess: reads('team.isSuccess')
});
