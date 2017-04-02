import angular from 'angular';
import uiRouter from 'angular-ui-router';
import marketingMsgComponent from './marketingMsg.component';

let marketingMsgModule = angular.module('marketingMsg', [
  uiRouter
])

.component('marketingMsg', marketingMsgComponent)

.name;

export default marketingMsgModule;
