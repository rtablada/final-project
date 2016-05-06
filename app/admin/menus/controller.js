import Ember from 'ember';

export default Ember.Controller.extend({
  newMenu: false,

  createNewMenu(attrs) {
    const menu = this.store.createRecord(`menu`, attrs);

    menu.save().then(() => {
      this.toggleProperty(`newMenu`);
    }).catch((err) => {
      console.log(err);
    });
  },

  deleteMenu(menu) {
    menu.destroyRecord();
  },
});
