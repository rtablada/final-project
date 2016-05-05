import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout');
  this.route('login');

  this.route('admin', {
    path: '/',
  }, function () {
    this.route('users');
    this.route('register');
  });
});

export default Router;
