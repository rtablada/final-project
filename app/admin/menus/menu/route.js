import Ember from 'ember';

export default Ember.Route.extend({
  model({ menu_id }) {
    return Ember.RSVP.hash({
      menu: this.store.findRecord(`menu`, menu_id),
      allergens: this.store.findAll(`allergen`),
    });
  },
  setupController(controller, model) {
    this._super(controller, model);

    controller.set(`newItem`, false);
  },
});
