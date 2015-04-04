/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.productCtrl', ['ngRoute'])

.controller('productCtrl', ['$scope', '$http',function($scope,$http) {
    $scope.header = "Top Sellers";
    $scope.templates = [{ name: 'templateCC', url: 'views/productList.html'}];
    $scope.page = 1;
    $scope.productList = [];
    $scope.fetching = false;
    $scope.ended = false;

      // Fetch more items
      $scope.getMore = function() {
        $scope.page++;
        $scope.fetching = true;

        $http.get('/api/products/'+$scope.page, { page : $scope.page }).then(function(items) {
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
      };
    
    $http.get("/api/products")
    .success(function(response) {
            var raw = response;
            
            var list = [];
            while(raw.length) {
               
                list.push(raw.splice(0,4));
            }
           // console.log(list);
            $scope.productList  = list;
        }
     );

}]);

