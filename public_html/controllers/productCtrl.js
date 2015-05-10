/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.productCtrl', ['ngRoute'])

.controller('productCtrl', ['$scope', '$http', 'apiService',function($scope,$http,apiService) {
    $scope.header = "Top Sellers";
    $scope.templates = [{ name: 'templateCC', url: 'views/productList.html'}];
    $scope.page = 1;
    $scope.productList = [];

      // Fetch more items
      $scope.getMore = function() {

        ga('send', 'event','Category','products','product scroll','/products/'+$scope.page);

        if(!apiService.fetching){
            $scope.page++;
            apiService.fetch("/api/products",$scope.page)
                .success(function(response) {
                      apiService.fetching = false;
                      $scope.productList = $scope.productList.concat(apiService.parse(response));
                       addthis.layers.refresh();
                    }
                );
        }

      };


    apiService.fetch("/api/products",$scope.page)
      .success(function(response) {
            apiService.fetching = false;
            $scope.productList = apiService.parse(response);
          }
      );



}]);

