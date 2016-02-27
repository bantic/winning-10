import Ember from 'ember';
import moment from 'moment';

const sportData = Ember.A([{
  id: 'Soccer',
  imageUrl: '/images/soccer.png'
}, {
  id: 'Basketball',
  imageUrl: '/images/basketball.png'
}, {
  id: 'Football',
  imageUrl: '/images/football.png'
}, {
  id: 'Hockey',
  imageUrl: '/images/hockey.png'
}, {
  id: 'Baseball',
  imageUrl: '/images/baseball.png'
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
  teamId: 'Giants',
  date: '2015-10-11',
  awayName: '49ers',
  homeScore: 30,
  awayScore: 27
}, {
  teamId: 'Jets',
  date: '2015-10-18',
  awayName: 'Redskins',
  homeScore: 34,
  awayScore: 20
}, {
  teamId: 'Islanders',
  date: '2015-10-17',
  awayName: 'Sharks',
  homeScore: 6,
  awayScore: 3
}, {
  teamId: 'Nets',
  date: '2015-11-17',
  awayName: 'Hawks',
  homeScore: 90,
  awayScore: 88
}, {
  teamId: 'Rangers',
  date: '2016-02-14',
  awayName: 'Flyers',
  homeScore: 3,
  awayScore: 1
}, {
  teamId: 'Knicks',
  date: '2016-02-26',
  awayName: 'Magic',
  homeScore: 108,
  awayScore: 95
}, {
  teamId: 'New York FC',
  date: '2016-06-02',
  awayName: 'Real Salt Lake'
}]);

const startDate = "2015-10-11";
const endDate = moment(startDate).add(1, 'year');

export { teamData, sportData, attemptData, endDate };
