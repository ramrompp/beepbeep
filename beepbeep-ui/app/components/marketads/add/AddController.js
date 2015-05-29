'use strict';

/**
* Controller used for Market Ad creation.
*/
angular.module('beepbeep.controllers.marketad.add', []).controller('addController', function($scope, $location, marketAdService) {

        $scope.create = function() {
            var $form = $('.ui.form');

            var isInvalid = !$form.form('validate form');

            if(isInvalid){
                return;
            }

            var toPersist = jQuery.extend({}, this.marketad);

            marketAdService.createMarketAd(toPersist)
                .success(function (data, status, headers, config) {
                        marketAdService.setErrors(false);
                        marketAdService.setStatusMessage('Market ad created successfully.');
                        $location.path("./#/marketads/details/" + data.id);
                })
                .error(function (data, status, headers, config) {
                        marketAdService.setErrors(true);
                        marketAdService.setStatusMessage('I was not able to create your ad.');
                });
        }

});