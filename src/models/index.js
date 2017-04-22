var angular      = require('angular');
var uiRouter  = require('angular-ui-router');

var models = angular.module('statefulApp.models', [
  uiRouter
]);

var ModelsController = require('./models.controller.js');
models.controller('ModelsController', ModelsController);

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
      url: '/models/form',
      templateUrl: modelsFormTemplate,
      controller: 'ModelsController',
      controllerAs: 'modelsCtrl'
    })
    .state('layout.models.list', {
      url: '/models/list',
      templateUrl: modelsListTemplate,
      controller: 'ModelsController',
      controllerAs: 'modelsCtrl'
    });
}

module.exports = models.name;

