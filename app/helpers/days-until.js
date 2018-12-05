import Ember from 'ember';
import moment from 'moment';

export function daysUntil([endDate]) {
  let now = moment();
  let result = endDate.diff(now, 'days');
  if (result <= 0) {
    result = 0;
  }
  return result;
}

export default Ember.Helper.helper(daysUntil);
