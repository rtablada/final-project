import Ember from 'ember';

export default Ember.Route.extend({
  // cloadinary: Ember.inject.service(`profile-upload`),

  setupController(controller, model) {
    this._super(controller, model);

    controller.set(`newItem`, false);
  },
});
