'use strict';

/**
 * @ngdoc function
 * @name unclaimedBaggageApp.controller:LuggageConveyor
 * @description
 * # LuggageConveyor
 * Controller for luggage conveyor belt
 */
angular.module('unclaimedBaggageApp')
  .controller('LuggageConveyor', 
    ['$scope', '$interval', 'luggageTypes', 
    function ($scope, $interval, luggageTypes) {

      $scope.luggages = [];
      var interval = $interval(function() {
        $scope.luggages.push({
          type: Math.floor(Math.random() * luggageTypes.length)
        })
      }, 1000);

  }]);
