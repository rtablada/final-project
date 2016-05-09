import Ember from 'ember';

export default Ember.Component.extend({
  items: [],

  init() {
    this._super(...arguments);

    if (!this.get(`values`)) {
      this.set(`items`, []);
      this.addItem();
    }
  },

  didReceiveAttrs() {
    if (this.get(`values`)) {
      this.set(`items`, this.get(`values`).map((x) => {
        return x.toJSON();
      }));
    }
  },

  addItem() {
    this.set(`items`, [...this.items, {}]);

    this.onadd(this.items);
  },
});
