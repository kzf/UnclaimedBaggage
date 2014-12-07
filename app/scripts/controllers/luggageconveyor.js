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
    ['$scope', '$interval', 'hoard', 'luggageTypes', 
    function ($scope, $interval, hoard, luggageTypes) {

      $scope.luggages = [];
      var interval = $interval(function() {
        if ($scope.luggages.length < 4) {
          $scope.luggages.push({
            type: Math.floor(Math.random() * luggageTypes.length),
            contents: Math.floor(Math.random() * 200)
          });
        }
      }, 1000);

      $scope.openLuggage = function(i) {
        var luggage = $scope.luggages[i];
        hoard.addItem(luggage.contents);
        $scope.luggages.splice(i, 1);
      }

      $scope.talk = function() {
        alert("Hi");
      }

  }]);

angular.module('unclaimedBaggageApp')
  .controller('HoardController', 
    ['$scope', 'hoard',
    function ($scope, hoard) {

      $scope.onlyOwnedItems = false;

      $scope.hoard = hoard.hoard;

      $scope.filterOwnedItems = function(item) {
        return !$scope.onlyOwnedItems || item.count > 0;
      }

  }]);
