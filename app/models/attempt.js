import Ember from 'ember';
const { computed } = Ember;
const { gt } = computed;

export default Ember.Object.extend({
  date: computed({
    get() {
      return this._date;
    },
    set(key, value) {
      this._date = new Date(value);
      return this._date;
    }
  }),
  teamId: '',
  awayName: '',
  homeScore: 0,
  awayScore: 0,
  isSuccess: gt('homeScore', 'awayScore'),
});