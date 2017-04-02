import template from './mininav.html';
import controller from './mininav.controller';

let mininavComponent = {
  restrict: 'E',
  bindings: {
    items: '='
  },
  template,
  controller
};

export default mininavComponent;
