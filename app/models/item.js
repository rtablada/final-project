import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  image: attr('string'),
  title: attr('string'),
  description: attr('string'),
});
