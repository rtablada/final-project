import Ember from 'ember';

export default Ember.Controller.extend({

  deleteUser(user) {
    user.destroyRecord();
  },
});
