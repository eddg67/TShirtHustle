'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'tagged.directives.infiniteScroll',
  'myApp.productCtrl',
  'myApp.searchCtrl',
  'myApp.storeCtrl',
  'myApp.contactCtrl',
  'myApp.apiService'
]).
config(['$routeProvider', function($routeProvider) {
$routeProvider.
      when('/search', {
        templateUrl: 'views/productList.html',
        controller: 'productCtrl'
      }).
      when('/search/:Id', {
        templateUrl: 'views/productList.html',
        controller: 'searchCtrl'
      }).
      when('/store', {
              templateUrl: 'views/productList.html',
              controller: 'productCtrl'
            }).
      when('/store/:Id', {
               templateUrl: 'views/productList.html',
               controller: 'storeCtrl'
             }).
      when('/', {
              templateUrl: 'views/productList.html',
              controller: 'productCtrl'
            }).
      otherwise({
        redirectTo: '/'
      });
  
}],['$httpProvider',function($httpProvider){
    
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

}]);
