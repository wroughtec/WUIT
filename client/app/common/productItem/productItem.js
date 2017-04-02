import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productItemComponent from './productItem.component';

let productItemModule = angular.module('productItem', [
  uiRouter
])

.component('productItem', productItemComponent)

.name;

export default productItemModule;
