import template from './treeMenu.html';
import controller from './treeMenu.controller';

let treeMenuComponent = {
  restrict: 'E',
  bindings: {
    menu: "=",
    menuClass: "@"
  },
  template,
  controller
};

export default treeMenuComponent;
