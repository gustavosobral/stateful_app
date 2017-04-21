var angular      = require('angular');
var localStorage = require('angular-local-storage');

var services = angular.module('statefulApp.services', [
  localStorage
]);

var CurrentUserService = require('./current-user.service.js');
services.factory('CurrentUserService', CurrentUserService);

module.exports = services.name;
