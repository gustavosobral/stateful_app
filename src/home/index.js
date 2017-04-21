var angular   = require('angular');
var uiRouter  = require('angular-ui-router');

var home = angular.module('statefulApp.home', [
  uiRouter
]);

var HomeController = require('./home.controller.js');
home.controller('HomeController', HomeController);

home.config(Routes);

var homeTemplate = require('./home.template.html');

function Routes($stateProvider) {
   $stateProvider
    .state('layout.home', {
      url: '/home',
      templateUrl: homeTemplate,
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    });
}

module.exports = home.name;
