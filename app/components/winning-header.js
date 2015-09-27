import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['winning-header'],
  stats: Ember.inject.service()
});
