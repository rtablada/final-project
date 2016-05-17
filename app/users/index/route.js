import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll(`menu`);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set(`newMenu`, false);
  },
});
