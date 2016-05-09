import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  image: attr('string'),
  title: attr('string'),
  description: attr('string'),

  steps: hasMany('step'),
  menu: belongsTo('menu'),
});
