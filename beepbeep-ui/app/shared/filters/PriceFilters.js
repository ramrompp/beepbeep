'use strict';

// Price specific UI conversion filters.
angular.module('beepbeep.filters.price', []).filter('convertPriceFromCents', function() {
  return function(input) {
    return input / 100;
  };
});