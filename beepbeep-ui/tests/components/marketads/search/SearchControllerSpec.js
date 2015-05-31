'use strict';

describe('Given user wants to buy stuff', function() {
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
            return $controller('searchController', {'$scope': $rootScope});
        };
    }));

    afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
    });

    describe('When user opens BeepBeep', function() {
        it('Then list of unsorted marketads are provided', function() {
            $httpBackend.expectGET("http://mepa-store-api.herokuapp.com/marketads")
                            .respond(200, [{"id":"552aaecae4b032ab7fea2557","title":"asdsad","description":"asdasd","priceCents":101000,"imageUrl":null,"thumbnailUrl":null,"email":"adsd@caas.com","phone":"asdasd"},{"id":"552ab0ffe4b032ab7fea255a","title":"testaaja","description":"asdasd","priceCents":1010100,"imageUrl":null,"thumbnailUrl":null,"email":"oadsd@asdads.com","phone":"asdasda"},{"id":"552ab236e4b032ab7fea255b","title":"eieiei","description":"eieieie\n\ndd","priceCents":10100,"imageUrl":null,"thumbnailUrl":null,"email":"asd@asdsd.com","phone":"asdasda"}]);
            var controller = createController();
            $httpBackend.flush();
            expect($rootScope.marketads.length).toEqual(3);
        });
    });

});