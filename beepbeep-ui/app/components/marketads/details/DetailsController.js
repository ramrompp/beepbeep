'use strict';

/**
* Controller used for viewing market ad details.
*
*/
angular.module('beepbeep.controllers.marketad.details', []).controller('detailsController', function($scope, $routeParams, marketAdService) {

        $scope.marketad = [];

        marketAdService.getMarketAd($routeParams.id).success(function (data) {
            $scope.marketad = data;
        });

});