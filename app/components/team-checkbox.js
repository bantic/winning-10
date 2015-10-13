import Ember from 'ember';
import moment from 'moment';

const { computed } = Ember;
const { reads } = computed;

export default Ember.Component.extend({
  classNames: ['team-checkbox'],
  classNameBindings: ['isSuccess'],
  attributeBindings: ['title'],

  isSuccess: reads('team.isSuccess'),
  name: reads('team.name'),
  successfulAttempts: reads('team.successfulAttempts'),

  title: computed('name', 'isSuccess', 'successfulAttempts.[]', function(){
    const name = this.get('name');

    if (this.get('isSuccess')) {
      const attempt = this.get('successfulAttempts.firstObject');
      const date = moment(attempt.get('date')).format('MMM Do YYYY');
      return `${name} (completed vs ${attempt.get('awayName')} on ${date})`;
    } else {
      return `${name} (not completed yet)`;
    }
  })
});
