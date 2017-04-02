import angular from 'angular';
import uiRouter from 'angular-ui-router';
import marketingComponent from './marketing.component';

let marketingModule = angular.module('marketing', [
  uiRouter
])

.component('marketing', marketingComponent)

.name;

export default marketingModule;
