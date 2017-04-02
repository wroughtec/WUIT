import template from './marketingMsg.html';
import controller from './marketingMsg.controller';

let marketingMsgComponent = {
  restrict: 'E',
  bindings: {
    list: '=',
    listClass: '@'
  },
  template,
  controller
};

export default marketingMsgComponent;
