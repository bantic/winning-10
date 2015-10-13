import Ember from 'ember';
const { computed } = Ember;

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
  didHappen: computed('date', function() {
    return this.get('date') < new Date();
  }),
  teamId: '',
  awayName: '',
  homeScore: 0,
  awayScore: 0,
  isSuccess: computed('homeScore', 'awayScore', function(){
    return this.get('homeScore') > this.get('awayScore');
  })
});
