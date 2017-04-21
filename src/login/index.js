var angular   = require('angular');
var uiRouter  = require('angular-ui-router');
var ipCookie  = require('angular-cookie');
var tokenAuth = require('ng-token-auth');

var login = angular.module('statefulApp.login', [
  uiRouter, ipCookie, tokenAuth
]);

var LoginController = require('./login.controller.js');
login.controller('LoginController', LoginController);

login.config(Routes);

var loginTemplate = require('./login.template.html');

function Routes($stateProvider) {
   $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: loginTemplate,
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    });
}

module.exports = login.name;
