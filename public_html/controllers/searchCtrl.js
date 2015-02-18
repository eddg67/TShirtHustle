/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.searchCtrl', [])
.controller('searchCtrl', function($scope,$location,$http,$routeParams) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
     $scope.type = "Search Results";
    $scope.Id = $routeParams.Id;
    var path = "/api/search/" + $scope.Id;

    $scope.search = function(term)
    {
       path = "/search/"+term;
        $location.path( path );
    }

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

