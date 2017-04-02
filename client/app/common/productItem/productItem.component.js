import template from './productItem.html';
import controller from './productItem.controller';

let productItemComponent = {
  restrict: 'E',
  bindings: {
    item: '='
  },
  template,
  controller
};

export default productItemComponent;
