'use strict';

/**
 * @ngdoc constant
 * @name unclaimedBaggageApp.constant:LuggageTypes
 * @description
 * # LuggageTypes
 * Defines the types of luggage
 */
angular.module('unclaimedBaggageApp')
  .constant('luggageTypes', (function() {
    var COLORS = {
      brown: [
        '#D49E68', '#AA7E53', '#996600', '#A37519'
        ],
      colorful: [
        '#001A66', '#5C85FF', '#FFA3FF', '#CC0000', '#008A00', '#CC9900', '#8164AD', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'
        ],
      muted: [
        '#D49E68', '#AA7E53', '#996600', '#A37519', '#523A0C', '#97896D', '#5C5C2E', '#000052', '#000008', '#4C0000', '#000000', '#013220', '#3D0C02', '#3C1414', '#232B2B', '#000000', '#000000', '#000000'
        ]
    }
    return [
      {
        name: 'backpack5',
        colors: COLORS.colorful
      },
      {
        name: 'bag29',
        colors: COLORS.colorful
      },
      {
        name: 'bag38',
        colors: COLORS.brown
      },
      {
        name: 'baggage18',
        colors: COLORS.muted
      },
      {
        name: 'big37',
        colors: COLORS.brown
      },
      {
        name: 'briefcase14',
        colors: COLORS.colorful
      },
      {
        name: 'briefcase19',
        colors: COLORS.muted
      },
      {
        name: 'briefcase51',
        colors: COLORS.muted
      },
      {
        name: 'briefcase8',
        colors: COLORS.muted
      },
      {
        name: 'delivery24',
        colors: COLORS.brown
      },
      {
        name: 'fashionable',
        colors: COLORS.colorful
      },
      {
        name: 'golf18',
        colors: COLORS.colorful
      },
      {
        name: 'portfolio3',
        colors: COLORS.muted
      },
      {
        name: 'rounded16',
        colors: COLORS.muted
      },
      {
        name: 'suitcase1',
        colors: COLORS.muted
      },
      {
        name: 'suitcase24',
        colors: COLORS.muted
      },
      {
        name: 'suitcase43',
        colors: COLORS.colorful
      }
    ];
  })());
