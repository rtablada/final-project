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
    if (confirm(`Remove this item?\nThere's no going back...`)) {
      item.destroyRecord();
    }
  },

  deleteMenu(menu) {
    if (confirm(`Delete this menu?\nThis will permanently delete this menu and ALL of it's contents.\nThere's no going back...`)) {
      menu.destroyRecord()
      .then(() => {
        this.transitionToRoute(`admin.menus`);
      });
    }
  },
});
