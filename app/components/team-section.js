import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['team-section'],
  classNameBindings: ['team.isSuccess'],
  team: null
});
