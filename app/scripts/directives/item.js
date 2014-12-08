'use strict';

/**
 * @ngdoc function
 * @name unclaimedBaggageApp.controller:LuggageConveyor
 * @description
 * # LuggageConveyor
 * Controller for luggage conveyor belt
 */
angular.module('unclaimedBaggageApp')
  .directive('ubItem', ['$sce', 'items', function ($sce, items) {
    console.log('a');
    return {
      template: '<span class="item flaticon-{{id}}"></span>',
      replace: true,
      link: function(scope, elem, attr) {

        attr.$observe('type', function(i) {
          var item = items[i];
          scope.id = item.id;
          elem.css('color', item.color);
        });

        

      }
    };
  }]);
