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
    ['$scope', '$interval', 'hoard', 'items', 'luggageTypes', 
    function ($scope, $interval, hoard, items, luggageTypes) {

      $scope.luggages = [];
      var interval = $interval(function() {
        if ($scope.luggages.length < 4) {
          var contents = [];
          for (var i = 0; i < 7; i++) {
            contents.push(Math.floor(Math.random() * items.length));
          }
          $scope.luggages.push({
            type: Math.floor(Math.random() * luggageTypes.length),
            contents: contents
          });
        }
      }, 1000);

      $scope.openLuggage = function(i) {
        var luggage = $scope.luggages[i];
        luggage.contents.forEach(function(i) {
          hoard.addItem(i);
        });
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
