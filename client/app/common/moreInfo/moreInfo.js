import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moreInfoComponent from './moreInfo.component';

let moreInfoModule = angular.module('moreInfo', [
  uiRouter
])

.component('moreInfo', moreInfoComponent)

.name;

export default moreInfoModule;
