import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
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
    user.destroyRecord();
  },
});
