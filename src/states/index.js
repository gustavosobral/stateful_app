var angular   = require('angular');
var uiRouter  = require('angular-ui-router');

var states = angular.module('statefulApp.states', [
  uiRouter
]);

var StatesListController = require('./states.list.controller.js');
states.controller('StatesListController', StatesListController);

var StatesService = require('./states.service.js');
states.factory('StatesService', StatesService);

states.config(Routes);

var statesTemplate     = require('./states.template.html');
var statesListTemplate = require('./states.list.template.html');

function Routes($stateProvider) {
   $stateProvider
    .state('layout.states', {
      url: '/states',
      abstract: true,
      templateUrl: statesTemplate,
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
    .state('layout.states.list', {
      url: '/list/{id:int}',
      templateUrl: statesListTemplate,
      controller: 'StatesListController',
      controllerAs: 'statesListCtrl'
    });
}

module.exports = states.name;
