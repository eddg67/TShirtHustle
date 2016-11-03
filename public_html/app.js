'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'tagged.directives.infiniteScroll',
  'myApp.categoryCtrl',
  'myApp.productCtrl',
  'myApp.searchCtrl',
  'myApp.storeCtrl',
  'myApp.contactCtrl',
  'myApp.detailCtrl',
  'myApp.pageCtrl',
  'myApp.apiService'
]).
config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
$locationProvider.html5Mode(true);
$routeProvider.
      when('/detail/:Id', {
        templateUrl: './../views/detail.html',
        controller: 'detailCtrl',
        controllerAs:'detail'
      }).
       when('/about', {
        templateUrl: './../views/about.html'
      }).
      when('/search', {
        templateUrl: './../views/productList.html',
        controller: 'searchCtrl',
        controllerAs:'product'
      }).
      when('/search/:Id', {
        templateUrl: './../views/productList.html',
        controller: 'searchCtrl',
        controllerAs:'product'
      }).
      when('/store', {
              templateUrl: './../views/productList.html',
              controller: 'productCtrl',
              controllerAs:'product'
            }).
      when('/store/:Id', {
               templateUrl: './../views/productList.html',
               controller: 'storeCtrl',
                controllerAs:'product'
             }).
      when('/', {
              templateUrl: './../views/productList.html',
              controller: 'productCtrl',
              controllerAs:'product'
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
