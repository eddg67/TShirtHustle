/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.searchCtrl', [])
.controller('searchCtrl', function($scope,$location,$http,$routeParams) {

    $scope.header = "Search Results";
    $scope.Id = $routeParams.Id;
    var path = "/api/search/" + $scope.Id;

    $scope.search = function(term)
    {
       path = "/search/"+term;
        $location.path( path );
    }

    $scope.page = 1;
    $scope.productList = [];
    $scope.fetching = false;
    $scope.ended = false;
 // Fetch more items
    $scope.getMore = function() {
         $scope.page++;
         $scope.fetching = true;

       if(!$scope.ended){

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

