import Ember from 'ember';

export default Ember.Controller.extend({
  delete(allergen) {
    if (confirm(`Are you sure you want to delete ${allergen.name}`)) {
      allergen.destroyRecord();
    }
  },
});
