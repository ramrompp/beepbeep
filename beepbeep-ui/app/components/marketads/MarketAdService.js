'use strict';

/**
* Service for Handling Market Ad related operations.
*
*/
angular.module('beepbeep.services.marketad', []).factory('marketAdService', function($http) {

        var statusMessage = '';
        var errors = false;

        var marketAdsAPI = {};

        marketAdsAPI.getMarketAd = function(id) {
            return $http.get('http://mepa-store-api.herokuapp.com/marketads/' + id);
        };

        marketAdsAPI.getMarketAds = function() {
            return $http.get('http://mepa-store-api.herokuapp.com/marketads');
        };

        marketAdsAPI.createMarketAd = function(marketad) {
            marketad.priceCents = marketad.priceCents * 100;
            return $http.post('http://mepa-store-api.herokuapp.com/marketads', marketad);
        };

        marketAdsAPI.deleteMarketAd = function(id) {
            return $http.delete('http://mepa-store-api.herokuapp.com/marketads/' + id);
        };

        marketAdsAPI.setErrors = function(result) {
            this.errors = result;
        };

        marketAdsAPI.getErrors = function() {
            return this.errors;
        };

        marketAdsAPI.setStatusMessage = function(message) {
            this.statusMessage = message;
        };

        marketAdsAPI.getStatusMessage = function() {
            return this.statusMessage;
        };

        marketAdsAPI.clearStatus = function() {
            this.errors = false;
            this.statusMessage = '';
        }

        return marketAdsAPI;
});