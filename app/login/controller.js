import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  loginUser(attrs) {
    this.get(`session`).authenticate(`authenticator:application`, attrs.email, attrs.password)
    .then(() => {
      console.log(`logged in`);
    }).catch((err) => {
      console.log(err);
    });
  },
});
