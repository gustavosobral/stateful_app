var angular  = require('angular');
var uiRouter = require('angular-ui-router');

require('assets/scss/base.scss');

var login  = require('login');

var app = angular.module('statefulApp', [
  login, uiRouter
]);

app.config(Routes);

function Routes($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}
