'use strict';

angular.module('beepbeep.filters.string', []).filter('createTitleSnippet', function() {
    return function(title) {
        if(title.length > 15) {
            return title.substring(0, 15) + "...";
        }
        return title;
    };
}).filter('createDescriptionSnippet', function() {
      return function(description) {
          if(description.length > 50) {
              return description.substring(0, 50) + "...";
          }
          return description;
      };
}).filter('formatDescription', function() {
    return function(input) {
        if(!input) {
            return input;
        }
        // Strip all possible HTML from description.
        input = input.replace(new RegExp('<\/?[^>]+>', 'g'), '');
        return input.replace(new RegExp('\r?\n', 'g'), '<br>');
    };
});