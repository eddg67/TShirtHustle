/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.contactCtrl', [])

.controller('contactCtrl', ['$scope','$http',function($scope,$http) {
    //$scope.user = {};
    $scope.templates = [{ name: 'contact', url: 'views/contactForm.html'}];
    $scope.getEmail = function(user) {
        console.log(user);
        
          $http.post("/contact",{email:user.email}).
            success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
          
      };

}]);

