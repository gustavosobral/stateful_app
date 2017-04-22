var angular = require('angular');

var menu = angular.module('statefulApp.components.menu', []);

var menuComponent = require('./menu.component.js');
menu.directive('menu', menuComponent);

module.exports = menu.name;
