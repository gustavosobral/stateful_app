var angular   = require('angular');
var uiRouter  = require('angular-ui-router');

var login = angular.module('statefulApp.login', [
  uiRouter
]);

var LoginController = require('./login.controller.js');
login.controller('LoginController', LoginController);

login.config(Routes);

var loginTemplate = require('./login.template.html');

function Routes($stateProvider) {
   $stateProvider
    .state('login', {
      url: '/',
      templateUrl: loginTemplate,
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    });
}

module.exports = login.name;
