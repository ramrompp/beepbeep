'use strict';

/**
* Controller used for viewing and searching market ad lists.
*
*/
angular.module('beepbeep.controllers.marketad.search', []).controller('searchController', function($scope, marketAdService) {

        $scope.filterString = null;
        $scope.marketads = [];

        $scope.errors = marketAdService.getErrors();
        $scope.message = marketAdService.getStatusMessage();
        marketAdService.clearStatus();

        $scope.searchFilter = function(marketAd) {
            var searchWord = new RegExp($scope.filterString, 'i');
            return !$scope.filterString || searchWord.test(marketAd.title) || searchWord.test(marketAd.description);
        };

        marketAdService.getMarketAds().success(function (data) {
            $scope.marketads = data;
        });

});