'use strict';

describe('Given user wants to delete market ad', function() {
    beforeEach(module('beepbeep'));

    var $controller;
    var $httpBackend;
    var $rootScope;
    var createController;
    var deleteRequestHandler;
    var deleteRequestFailHandler;
    var $marketAdService;

    beforeEach(inject(function($injector, _marketAdService_) {

        $httpBackend = $injector.get('$httpBackend');
        deleteRequestHandler = $httpBackend.when('DELETE', 'http://mepa-store-api.herokuapp.com/marketads/123456')
            .respond(200, '');

        deleteRequestFailHandler = $httpBackend.when('DELETE', 'http://mepa-store-api.herokuapp.com/marketads/FAILS')
            .respond(400, '');

        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');

        $marketAdService =_marketAdService_;

        createController = function() {
            return $controller('deleteController', {'$scope': $rootScope});
        };
    }));

    afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
    });

    describe('When user clicks delete button and confirms it', function() {
        it('Then ad with corresponding id is deleted from Mepa-Store market ad service', function() {
            $httpBackend.expectDELETE("http://mepa-store-api.herokuapp.com/marketads/123456");
            var controller = createController();
            $rootScope.deletead('123456');
            $httpBackend.flush();
            expect($marketAdService.getErrors()).toEqual(false);
            expect($marketAdService.getStatusMessage()).toEqual('Market ad deleted successfully.');
        });
    });

    describe('When user clicks delete button and confirms it', function() {
            it('Then ad with corresponding id can not be deleted from Mepa-Store market ad service', function() {
                $httpBackend.expectDELETE("http://mepa-store-api.herokuapp.com/marketads/FAILS");
                var controller = createController();
                $rootScope.deletead('FAILS');
                $httpBackend.flush();
                expect($marketAdService.getErrors()).toEqual(true);
                expect($marketAdService.getStatusMessage()).toEqual('I was not able to delete your ad.');
            });
        });

});