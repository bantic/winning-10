import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['attempt'],
  classNameBindings: ['attempt.isSuccess', 'attempt.isPending', 'attempt.isFailure'],
  attempt: null
});
