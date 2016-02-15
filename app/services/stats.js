import Ember from 'ember';
const { computed, on } = Ember;
const { filterBy, reads } = computed;

import { sportData, teamData, attemptData, endDate } from '../utils/data';

export default Ember.Service.extend({
  loadData: on('init', function() {
    const Sport = this.container.lookupFactory('model:sport');
    const Team = this.container.lookupFactory('model:team');
    const Attempt = this.container.lookupFactory('model:attempt');

    this.set('sports', sportData.map(data => Sport.create(data)));
    this.set('teams', teamData.map(data => Team.create(data)));
    this.set('attempts', attemptData.map(data => Attempt.create(data)));
  }),

  successfulTeams: filterBy('teams', 'isSuccess'),
  unsuccessfulTeams: filterBy('teams', 'isNotSuccess'),
  successCount: reads('successfulTeams.length'),
  successfulAttempts: filterBy('attempts', 'isSuccess'),
  failedAttempts: filterBy('attempts', 'isFailure'),
  endDate
});
