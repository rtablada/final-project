import Ember from 'ember';

export default Ember.Controller.extend({
  newUser: false,

  createNewUser(attrs) {
    const user = this.store.createRecord(`end-user`, attrs);

    user.save().then(() => {
      this.toggleProperty(`newUser`);
      console.log(`registered`);
    }).catch((err) => {
      console.log(err);
    });
  },

  deleteUser(user) {
    if (confirm(`Delete this menu?\nThis will permanently delete this menu and ALL of it's contents.\nThere's no going back...`)) {
      user.destroyRecord();
    }
  },
});
