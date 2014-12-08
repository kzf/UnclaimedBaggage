'use strict';

/**
 * @ngdoc function
 * @name unclaimedBaggageApp.controller:LuggageConveyor
 * @description
 * # LuggageConveyor
 * Controller for luggage conveyor belt
 */
angular.module('unclaimedBaggageApp')
  .directive('ubLuggage', ['$sce', 'luggageTypes', function ($sce, luggageTypes) {
    return {
      template: '<i class="flaticon-{{name}}"></i>',
      link: function(scope, elem, attr) {

        attr.$observe('type', function(type) {
          var luggage = luggageTypes[type];
          scope.name = luggage.name;
          var color = luggage.colors[Math.floor(Math.random() * luggage.colors.length)];
          elem.find('i').css('color', color);
        });

        

      }
    };
  }]);
