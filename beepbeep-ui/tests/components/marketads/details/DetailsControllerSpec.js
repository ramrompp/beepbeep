'use strict';

describe('Given user wants to view market ad details', function() {
    beforeEach(module('beepbeep'));

    var $controller;
    var $httpBackend;
    var $rootScope;
    var createController;

    beforeEach(inject(function($injector) {

        $httpBackend = $injector.get('$httpBackend');

        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');

        createController = function() {
            return $controller('detailsController', {'$scope': $rootScope, '$routeParams':{id: '1234567'}});
        };
    }));

    afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
    });

    describe('When user selects a specific ad from list', function() {
        it('Then add with corresponding id is fetched from Mepa-Store market ad service', function() {
            $httpBackend.expectGET("http://mepa-store-api.herokuapp.com/marketads/1234567")
                            .respond(200, {"id":"1234567","title":"asdsad","description":"asdasd","priceCents":101000,"imageUrl":null,"thumbnailUrl":null,"email":"adsd@caas.com","phone":"asdasd"});
            var controller = createController();
            $httpBackend.flush();
            expect($rootScope.marketad.id).toEqual('1234567');
        });
    });
});