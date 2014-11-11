/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.productCtrl', ['ngRoute'])

/*.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])*/

.controller('productCtrl', function($scope,$http) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.templates = [{ name: 'templateCC', url: 'views/productList.html'}];
    
    $http.get("/products?t=11")
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

