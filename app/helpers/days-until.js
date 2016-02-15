import Ember from 'ember';
import moment from 'moment';

export function daysUntil([endDate]) {
  let now = moment();
  return endDate.diff(now, 'days');
}

export default Ember.Helper.helper(daysUntil);
