import Ember from 'ember';

const sportData = Ember.A([{
  id: 'Soccer'
}, {
  id: 'Basketball'
}, {
  id: 'Football'
}, {
  id: 'Hockey'
}, {
  id: 'Baseball'
}]);

const teamData = Ember.A([{
  id: 'New York FC',
  sportId: 'Soccer',
}, {
  id: 'Red Bulls',
  sportId: 'Soccer',
}, {
  id: 'Knicks',
  sportId: 'Basketball',
}, {
  id: 'Nets',
  sportId: 'Basketball',
}, {
  id: 'Giants',
  sportId: 'Football',
}, {
  id: 'Jets',
  sportId: 'Football',
}, {
  id: 'Rangers',
  sportId: 'Hockey',
}, {
  id: 'Islanders',
  sportId: 'Hockey',
}, {
  id: 'Mets',
  sportId: 'Baseball',
}, {
  id: 'Yankees',
  sportId: 'Baseball',
}]);

const attemptData = Ember.A([{
  teamId: 'Mets',
  date: '2015-10-02',
  awayName: 'Nationals',
  homeScore: 0,
  awayScore: 0
}, {
  teamId: 'Giants',
  date: '2015-10-11',
  awayName: '49ers',
  homeScore: 0,
  awayScore: 0
}, {
  teamId: 'Jets',
  date: '2015-10-18',
  awayName: 'Redskins',
  homeScore: 0,
  awayScore: 0
}]);

export { teamData, sportData, attemptData };
