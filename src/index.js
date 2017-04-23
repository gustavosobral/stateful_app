var angular   = require('angular');
var uiRouter  = require('angular-ui-router');
var ipCookie  = require('angular-cookie');
var alert     = require('angular-flash-alert');
var tokenAuth = require('ng-token-auth');
var sortable  = require('ng-sortable');
var dialog    = require('ng-dialog');

require('assets/scss/base.scss');

var login     = require('login');
var models    = require('models');
var services  = require('services');

var menu   = require('components/menu');
var navbar = require('components/navbar');

var app = angular.module('statefulApp', [
  login, models, services, menu, navbar,
  uiRouter, ipCookie, alert, tokenAuth,
  sortable, dialog
]);

app.config(function($authProvider, localStorageServiceProvider, FlashProvider) {
  $authProvider.configure({
    apiUrl:  'https://stateful-api.herokuapp.com/v1',
    storage: 'localStorage'
  });

  localStorageServiceProvider.setPrefix('statefulApp')

  FlashProvider.setShowClose(true);
  FlashProvider.setTimeout(5000);
})

app.config(Routes);

var layoutTemplate = require('layout/layout.template.html');

function Routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('layout', {
      url: '',
      abstract: true,
      templateUrl: layoutTemplate
    })
    .state('index', {
      url: '/',
      template: '',
      controller: function($state, $auth) {
        $auth.validateUser()
          .then(function(resp) {
            $state.go('layout.models.list');
          })
          .catch(function(resp) {
            $state.go('login');
          });
      }
    });

  $urlRouterProvider.otherwise('/');
}
