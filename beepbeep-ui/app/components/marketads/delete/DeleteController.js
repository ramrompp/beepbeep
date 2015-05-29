'use strict';

/**
* Controller used for market ad deletion.
*
*/
angular.module('beepbeep.controllers.marketad.delete', []).controller('deleteController', function($scope, $location, marketAdService) {

        $scope.deletead = function(id) {
            marketAdService.deleteMarketAd(id)
                .success(function (data, status, headers, config) {
                        marketAdService.setErrors(false);
                        marketAdService.setStatusMessage('Market ad deleted successfully.');
                        $location.path("./#/search");
                })
                .error(function (data, status, headers, config) {
                        marketAdService.setErrors(true);
                        marketAdService.setStatusMessage('I was not able to delete your ad.');
                });
        }

});