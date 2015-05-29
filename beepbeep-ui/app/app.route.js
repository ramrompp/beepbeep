angular.module('beepbeep').config([ '$routeProvider', function($routeProvider){
          $routeProvider
              .when('/marketads/search', {templateUrl: 'components/marketads/search/SearchView.html', controller: 'searchController'})
              .when('/marketads/details/:id', {templateUrl: 'components/marketads/details/DetailsView.html', controller: 'detailsController'})
              .when('/marketads/add', {templateUrl: 'components/marketads/add/AddView.html', controller: 'addController'})
              .otherwise({redirectTo: '/marketads/search'});
}]);