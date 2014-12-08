'use strict';

/**
 * @ngdoc function
 * @name unclaimedBaggageApp.service:Hoard
 * @description
 * # Hoard
 * Service for the hoard
 */
angular.module('unclaimedBaggageApp')
  .service('hoard', 
    ['items',
    function (items) {

      var hoard = [];

      items.forEach(function(i, index) {
        hoard.push({
          name: i.name,
          id: index,
          count: 0,
          owned: false
        })
      })

      this.hoard = hoard;

      this.addItem = function(i) {
        hoard[i].count++;
        hoard[i].owned = true;
      }

  }]);
