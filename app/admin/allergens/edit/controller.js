import Ember from 'ember';

export default Ember.Controller.extend({
  saveAllergen(allergen, formValues) {
    allergen.setProperties(formValues);

    allergen.save().then(() => {
      this.transitionToRoute(`admin.allergens.index`);
    });
  },
});
