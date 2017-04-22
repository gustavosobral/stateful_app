var angular = require('angular');

var navbar = angular.module('statefulApp.components.navbar', []);

var navbarComponent = require('./navbar.component.js');
navbar.directive('navbar', navbarComponent);

module.exports = navbar.name;
