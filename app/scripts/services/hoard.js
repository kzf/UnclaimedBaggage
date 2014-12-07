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
    [
    function () {

      var hoard = [];

      for (var i = 0; i < 200; i++) {
        hoard.push({
          name: 'sock' + i,
          count: 0
        });
      }

      this.hoard = hoard;

      this.addItem = function(i) {
        hoard[i].count++;
      }

  }]);
