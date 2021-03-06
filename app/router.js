import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('appid-results', { path: '/appid-results/:appid'});
  this.route('tf2hats', { path: ':steamid/hats'});
  this.route('appid-search');
  this.route('userid-search');
  this.route('userid-results', { path: '/userid-results/:userid' });
  this.route('all-friends', { path: '/friends/:userid' });
  this.route('games');
  this.route('game-search');
  this.route('game-results', { path: '/game-results/:appid'});
});

export default Router;
