import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mininavComponent from './mininav.component';

let mininavModule = angular.module('mininav', [
  uiRouter
])

.component('mininav', mininavComponent)

.name;

export default mininavModule;
