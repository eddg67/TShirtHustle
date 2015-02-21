/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.storeCtrl', [])
.controller('storeCtrl', function($scope,$location,$http,$routeParams) {

    $scope.Id = $routeParams.Id;
    var path = "/api/store/" + $scope.Id;
    var menuList = {5108:'BustedTees',14592:"Crazy Dog Tshirts"};
    $scope.header = ($scope.Id in menuList) ? menuList[$scope.Id]: "Top Sellers";

    $scope.load = function()
    {
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
            }
         );

    }
    if($scope.Id)
    {
     $scope.load();
    }


});

