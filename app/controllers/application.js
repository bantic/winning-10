import Ember from 'ember';

export default Ember.Controller.extend({
  stats: Ember.inject.service(),
  sports: Ember.computed.reads('stats.sports')
});
