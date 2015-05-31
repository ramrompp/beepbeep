'use strict';

// Mocks Mepa-Store backend operations to ease development time testing.
var httpBackendMock = function() {

    // Simulated backend data.
    var $response = [
        {
            "id":           "11111111",
            "title":        "TEST1",
            "description":  "TEST DESCRIPTION 1",
            "priceCents":   101000,
            "imageUrl":     null,
            "thumbnailUrl": null,
            "email":        "test1@test.invalid",
            "phone":        "1234567890"
        },
        {
            "id":           "22222222",
            "title":        "TEST2",
            "description":  "TEST DESCRIPTION 2",
            "priceCents":   1010100,
            "imageUrl":     null,
            "thumbnailUrl": null,
            "email":        "test2@test.invalid",
            "phone":        "1122334455"
        },
        {
            "id":           "333333333",
            "title":        "TEST3",
            "description":  "TEST DESCRIPTION 3",
            "priceCents":   10100,
            "imageUrl":     null,
            "thumbnailUrl": null,
            "email":        "test3@atest.invalid",
            "phone":        "0987654321"
        }
    ];

    angular.module('httpBackendMock', ['beepbeep', 'ngMockE2E'])
      .run(function($httpBackend) {

        $httpBackend.whenGET('http://mepa-store-api.herokuapp.com/marketads').respond(function(method, url, data, headers) {
            return [200, $response, {}];
        });

        $httpBackend.whenGET('http://mepa-store-api.herokuapp.com/marketads/11111111').respond(function(method, url, data, headers) {
            return [200, $response[0], {}];
        });

        $httpBackend.whenGET('http://mepa-store-api.herokuapp.com/marketads/44444444').respond(function(method, url, data, headers) {
            return [200, $response[3], {}];
        });

        $httpBackend.whenPOST('http://mepa-store-api.herokuapp.com/marketads').respond(function(method, url, data, headers) {
            var newInstance = angular.fromJson(data);
            newInstance.imageUrl = null;
            newInstance.thumbnailUrl = null;
            newInstance.id = '44444444'
            $response.push(newInstance);
            return [200, {}, {}];
        });

        $httpBackend.whenDELETE('http://mepa-store-api.herokuapp.com/marketads/11111111').respond(function(method, url, data, headers) {
            $response.splice(1,1);
            return [204, {}, {}];
        });
        $httpBackend.whenGET(/.*/).passThrough();
      })
};

module.exports.httpBackendMock = httpBackendMock;