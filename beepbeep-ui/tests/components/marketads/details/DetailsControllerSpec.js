'use strict';

describe('Given user wants to view market ad details', function() {
    beforeEach(module('beepbeep'));

    var $controller;
    var $httpBackend;
    var $rootScope;
    var createController;
    var getRequestHandler;

    beforeEach(inject(function($injector) {

        $httpBackend = $injector.get('$httpBackend');
        getRequestHandler = $httpBackend.when('GET', 'http://mepa-store-api.herokuapp.com/marketads/552aaecae4b032ab7fea2557')
            .respond({"id":"552aaecae4b032ab7fea2557","title":"asdsad","description":"asdasd","priceCents":101000,"imageUrl":null,"thumbnailUrl":null,"email":"adsd@caas.com","phone":"asdasd"});

        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');

        createController = function() {
            return $controller('detailsController', {'$scope': $rootScope, '$routeParams':{id: '552aaecae4b032ab7fea2557'}});
        };
    }));

    afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
    });

    describe('When user selects a specific ad from list', function() {
        it('Then add with corresponding id is fetched from Mepa-Store market ad service', function() {
            $httpBackend.expectGET("http://mepa-store-api.herokuapp.com/marketads/552aaecae4b032ab7fea2557");
            var controller = createController();
            $httpBackend.flush();
            expect($rootScope.marketad.id).toEqual('552aaecae4b032ab7fea2557');
        });
    });
});