import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout');
  this.route('login');

  this.route('users', {
    path: '/',
  }, function () {
    this.route('menus', function() {
      this.route('menu', {
        path: '/:menu_id'
      });
    });
  });

  this.route('admin', function () {
    this.route('users');
    this.route('menus', function() {
      this.route('menu', {
        path: '/:menu_id'
      });
    });
    this.route('allergens', function() {
      this.route('new');
      this.route('edit', {
        path: '/:id'
      });
    });
  });
});

export default Router;
