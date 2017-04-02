import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productsComponent from './products.component';

let productsModule = angular.module('products', [
  uiRouter
])

.component('products', productsComponent)

.name;

export default productsModule;
