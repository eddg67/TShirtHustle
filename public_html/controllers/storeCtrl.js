/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.storeCtrl', [])
.controller('storeCtrl', function($scope,$location,$http,$routeParams,apiService) {

    $scope.Id = $routeParams.Id;
    var path = "/api/store/" + $scope.Id;
    var menuList = {5108:'BustedTees',14592:"Crazy Dog Tshirts",49310:'Zazzle'};
    $scope.header = ($scope.Id in menuList) ? menuList[$scope.Id]: "Top Sellers";

    $scope.page = 1;
    $scope.productList = [];


      // Fetch more items
      $scope.getMore = function() {
        ga('send', 'event','Category','store','store scroll',path+'/'+$scope.page);

        if(!apiService.fetching){
           $scope.page++;
            apiService.fetch(path,$scope.page)
                         .success(function(response) {
                               apiService.fetching = false;
                               $scope.productList = $scope.productList.concat(apiService.parse(response));
                             }
                         );
        }

      };



    $scope.load = function()
    {
        ga('send', 'pageview','/store/' + $scope.Id);

        apiService.fetch(path,$scope.page)
              .success(function(response) {
                    apiService.fetching = false;
                    $scope.productList = apiService.parse(response);
                  }
              );
    }

    if($scope.Id)
    {
     $scope.load();
     $scope.ended = false;

    }


});

