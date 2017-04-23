var angular   = require('angular');
var uiRouter  = require('angular-ui-router');

var states = require('states');

var models = angular.module('statefulApp.models', [
  uiRouter, states
]);

var ModelsListController = require('./models.list.controller.js');
models.controller('ModelsListController', ModelsListController);

var ModelsFormController = require('./models.form.controller.js');
models.controller('ModelsFormController', ModelsFormController);

var ModelsService = require('./models.service.js');
models.factory('ModelsService', ModelsService);

models.config(Routes);

var modelsTemplate     = require('./models.template.html');
var modelsFormTemplate = require('./models.form.template.html');
var modelsListTemplate = require('./models.list.template.html');

function Routes($stateProvider) {
   $stateProvider
    .state('layout.models', {
      url: '/models',
      abstract: true,
      templateUrl: modelsTemplate,
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
    .state('layout.models.form', {
      url: '/form/:id',
      templateUrl: modelsFormTemplate,
      controller: 'ModelsFormController',
      controllerAs: 'modelsFormCtrl',
      resolve: {
        admin: function(CurrentUserService) {
          return CurrentUserService.isAdmin();
        }
      }
    })
    .state('layout.models.list', {
      url: '/list',
      templateUrl: modelsListTemplate,
      controller: 'ModelsListController',
      controllerAs: 'modelsListCtrl'
    });
}

module.exports = models.name;

