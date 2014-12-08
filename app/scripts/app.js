'use strict';

/**
 * @ngdoc overview
 * @name unclaimedBaggageApp
 * @description
 * # unclaimedBaggageApp
 *
 * Main module of the application.
 */
angular
  .module('unclaimedBaggageApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
