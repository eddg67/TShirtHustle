/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.searchCtrl', [])
.controller('searchCtrl',
            ['$scope','$location', '$http', '$routeParams',
            'apiService',
            function($scope,$location,$http,$routeParams,apiService) {

            $scope.header = "Search Results";
            $scope.Id = $routeParams.Id;
            var path = "/api/search/" + $scope.Id;

            $scope.search = function(term)
            {
               path = "/search/"+term;
               ga('send', 'pageview',path);
               $location.path( path );
            }

            $scope.page = 1;
            $scope.productList = [];

         // Fetch more items
            $scope.getMore = function() {


                 ga('send', 'event','Search scroll','scroll','Search scroll',path+'/'+$scope.page);
                  if(!apiService.fetching){
                        $scope.page++;
                        apiService.fetch(path,$scope.page)
                                     .success(function(response) {
                                           apiService.fetching = false;
                                           $scope.productList = $scope.productList.concat(apiService.parse(response));
                                            addthis.layers.refresh();
                                         }
                                     );
                    }
            };



    $scope.load = function()
    {
       ga('send', 'pageview',window.location.hash);

       apiService.fetch(path,$scope.page)
             .success(function(response) {
                   apiService.fetching = false;
                   $scope.productList = apiService.parse(response);
                   addthis.layers.refresh();
                 }
             );

    }
    if($scope.Id)
    {
    $scope.load();
    }


}]);

