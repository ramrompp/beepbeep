'use strict';

/**
* Directive for displaying general feedback messages.
*
*/
angular.module('beepbeep.directives.messages', []).directive('messageDirective', function() {

    return {
        templateUrl: 'shared/messages/MessageView.html'
    };

});