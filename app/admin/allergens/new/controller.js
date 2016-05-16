import Ember from 'ember';

export default Ember.Controller.extend({
  saveAllergen(formValues) {
    const allergen = this.store.createRecord(`allergen`, formValues);

    allergen.save().then(() => {
      this.transitionToRoute(`admin.allergens.index`);
    });
  },
});
