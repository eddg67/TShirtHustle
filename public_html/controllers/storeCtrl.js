/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.storeCtrl', [])
.controller('storeCtrl', function($scope,$location,$http,$routeParams) {

    $scope.Id = $routeParams.Id;
    var path = "/api/store/" + $scope.Id;
    var menuList = {5108:'BustedTees',14592:"Crazy Dog Tshirts",49310:'Zazzle'};
    $scope.header = ($scope.Id in menuList) ? menuList[$scope.Id]: "Top Sellers";

    $scope.page = 1;
    $scope.productList = [];
    $scope.fetching = false;
    $scope.ended = false;

      // Fetch more items
      $scope.getMore = function() {
        $scope.page++;
        $scope.fetching = true;
        if(!$scope.ended){
        ga('send', 'event','Category','store','store scroll',path+'/'+$scope.page);

        $http.get(path+'/'+$scope.page, { page : $scope.page }).then(function(items) {

          $scope.fetching = false;

          var raw = items.data;
          var list = [];
          while(raw.length){

            list.push(raw.splice(0,4));
          }

          // Append the items to the list
          if(list.length > 0)
          {
            $scope.ended = false;
            $scope.productList  = $scope.productList.concat(list);

          }else{

            $scope.ended = true;
          }

        });
        }
      };



    $scope.load = function()
    {
        ga('send', 'pageview','/store/' + $scope.Id);
        $http.get(path)
        .success(function(response) {
                var raw = response;

                var list = [];
                while(raw.length) {
                    list.push(raw.splice(0,4));
                }
                console.log(path);
                console.log(list);
                $scope.productList  = list;
                $scope.ended = false;
            }
         );
    }

    if($scope.Id)
    {
     $scope.load();
     $scope.ended = false;

    }


});

