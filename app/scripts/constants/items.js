'use strict';

/**
 * @ngdoc constant
 * @name unclaimedBaggageApp.constant:LuggageTypes
 * @description
 * # LuggageTypes
 * Defines the types of luggage
 */
angular.module('unclaimedBaggageApp')
  .constant('items', (function() {
    var items = [];

    var colors = ['red', 'blue', 'green', 'yellow', 'indigo', 'violet', 'brown', 'black', 'white', 'orange'];

    colors.forEach(function(c) {
      items.push({
        name: 'Pair of ' + c + ' socks',
        id: 'socks1',
        color: c
      });
      items.push({
        name: c + ' umbrella',
        id: 'umbrella2',
        color: c
      });
      items.push({
        name: c + ' sandals',
        id: 'sandals2',
        color: c
      });
      items.push({
        name: c + ' goggles',
        id: 'goggle',
        color: c
      });
      items.push({
        name: c + ' drink bottle',
        id: 'canteen',
        color: c
      });
      items.push({
        name: c + ' shorts',
        id: 'short2',
        color: c
      });

    });

    items.push({
      name: 'Sunglasses',
      id: 'black170',
      color: 'black'
    });

    items.push({
      name: 'Sunscreen',
      id: 'bottle36',
      color: 'darkblue'
    });

    items.push({
      name: 'Towel',
      id: 'wiping7',
      color: 'white'
    });

    return items;
  })());
