import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerNavComponent from './footerNav.component';

let footerNavModule = angular.module('footerNav', [
  uiRouter
])

.component('footerNav', footerNavComponent)

.name;

export default footerNavModule;
