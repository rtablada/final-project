import Ember from 'ember';

export default Ember.Controller.extend({
  newItem: false,

  createNewItem(attrs) {
    const item = this.store.createRecord(`item`, attrs);
    const menu = this.model;
    item.set(`menu`, menu);

    item.save().then(() => {
      this.toggleProperty(`newItem`);
    }).catch((err) => {
      console.log(err);
    });
  },

  deleteItem(item) {
    item.destroyRecord();
  },

  deleteMenu(menu) {
    menu.destroyRecord()
    .then(() => {
      this.transitionToRoute(`admin.menus`);
    });
  },
});
