'use strict';

describe('Given user wants to create market ad', function() {
    beforeEach(module('beepbeep'));

    var $controller;
    var $httpBackend;
    var $rootScope;
    var createController;
    var createRequestHandler;
    var createRequestFailHandler;
    var $marketAdService;

    beforeEach(inject(function($injector, _marketAdService_) {

        $httpBackend = $injector.get('$httpBackend');
        createRequestHandler = $httpBackend.when('POST', 'http://mepa-store-api.herokuapp.com/marketads', "{title: 'Test', description: 'Test Description', price: 123.45, email: 'test@test.invalid', phone: '12345678'}")
            .respond(200, '');

        createRequestFailHandler = $httpBackend.when('POST', 'http://mepa-store-api.herokuapp.com/marketads', '{}')
                    .respond(400, '');

        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');

        $marketAdService =_marketAdService_;

        createController = function() {
            return $controller('addController', {'$scope': $rootScope});
        };
    }));

    afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
    });

    describe('When user fills valid information on creation form and confirms creation', function() {
        it('Then ad with given values is created to Mepa-Store market ad service', function() {
            $httpBackend.expectPOST('http://mepa-store-api.herokuapp.com/marketads').respond({});
            var controller = createController();
            $rootScope.create({title: 'Test', description: 'Test Description', price: 123.45, email: 'test@test.invalid', phone: '12345678'});
            $httpBackend.flush();
            expect($marketAdService.getErrors()).toEqual(false);
            expect($marketAdService.getStatusMessage()).toEqual('Market ad created successfully.');
        });
    });

    /*describe('When user fills valid information on creation form and confirms creation and error happens service side', function() {
            it('Then ad with given values is not created to Mepa-Store market ad service', function() {
                $httpBackend.expectPOST('http://mepa-store-api.herokuapp.com/marketads', {priceCents: null});
                var controller = createController();
                $rootScope.create({});
                $httpBackend.flush();
                expect($marketAdService.getErrors()).toEqual(true);
                expect($marketAdService.getStatusMessage()).toEqual('I was not able to create your ad.');
            });
    });*/
});