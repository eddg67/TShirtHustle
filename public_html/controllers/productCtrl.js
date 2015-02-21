/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.productCtrl', ['ngRoute'])

.controller('productCtrl', function($scope,$http) {
    $scope.header = "Top Sellers";
    $scope.templates = [{ name: 'templateCC', url: 'views/productList.html'}];
    
    $http.get("/api/products")
    .success(function(response) {
            var raw = response;
            
            var list = [];
            while(raw.length) {
               
                list.push(raw.splice(0,4));
            }
            console.log(list);
            $scope.productList  = list;
        }
     );

});

