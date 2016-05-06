import Ember from 'ember';

export default Ember.Controller.extend({
  deleteMenu(menu) {
    menu.destroyRecord()
    .then(() => {
      this.transitionToRoute(`admin.menus`);
    });
  },
});
