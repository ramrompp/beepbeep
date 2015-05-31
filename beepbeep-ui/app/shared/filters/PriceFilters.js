'use strict';

angular.module('beepbeep.filters.price', []).filter('convertPriceFromCents', function() {
  return function(input) {
    return input / 100;
  };
});