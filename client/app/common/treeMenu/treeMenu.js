import angular from 'angular';
import uiRouter from 'angular-ui-router';
import treeMenuComponent from './treeMenu.component';

let treeMenuModule = angular.module('treeMenu', [
  uiRouter
])

.component('treeMenu', treeMenuComponent)
.name;

export default treeMenuModule;
