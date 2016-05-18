import Ember from 'ember';

export default Ember.Controller.extend({
  // newItem: false,
  //
  // createNewItem({ image, title, description, steps }) {
  //   const item = this.store.createRecord(`item`, { image, title, description });
  //   const menu = this.model;
  //   item.set(`menu`, menu);
  //
  //   item.save().then(() => {
  //     const stepModels = steps.map((step, order) => {
  //       const sModel = this.store.createRecord(`step`, { ...step, order, item });
  //
  //       return sModel.save();
  //     });
  //     this.toggleProperty(`newItem`);
  //
  //     return Promise.all([...stepModels]);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // },
  //
  // saveItem(item, values) {
  //   item.setProperties(values);
  //   $(`.form-hidden`).blur();
  //   values.description = values.description.trim();
  //
  //   item.setProperties(values);
  //   item.save();
  // },
  //
  // saveStep(step, values) {
  //   step.setProperties(values);
  //   $(`.form-hidden`).blur();
  //   values.description = values.description.trim();
  //
  //   step.setProperties(values);
  //   step.save();
  // },
  //
  // deleteStep(step) {
  //   if (confirm(`Remove this step?\nThere's no going back...`)) {
  //     step.destroyRecord();
  //   }
  // },
  //
  // deleteItem(item) {
  //   if (confirm(`Remove this item?\nThere's no going back...`)) {
  //     Promise.all(item.get(`steps`).map((step) => {
  //       return step.destroyRecord();
  //     })).then(() => {
  //       item.destroyRecord();
  //     });
  //   }
  // },
  //
  // deleteMenu(menu) {
  //   if (confirm(`Delete this menu?\nThis will permanently delete this menu and ALL of it's contents.\nThere's no going back...`)) {
  //     Promise.all(menu.get(`items`).map((item) => {
  //       return item.destroyRecord();
  //     })).then(() => {
  //       menu.destroyRecord()
  //       .then(() => {
  //         this.transitionToRoute(`admin.menus`);
  //       });
  //     });
  //   }
  // },
});
