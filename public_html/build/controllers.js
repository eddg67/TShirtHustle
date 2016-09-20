(function(){

'use strict';


    angular.module('myApp.apiService', [])
           .service('apiService',apiService);

    apiService.$inject = ['$http'];

    function apiService($http){
            this.fetching = false;
            this.fetch = fetch;
            this.parse = parse;
            this.post = post;

            function fetch(route,page) {
               this.page++;
                if(!this.ended){
                  this.fetching = true;
                  return $http.get(route+'/'+page, { page : page })
                  }
             };

            function post(route,data){
                return $http.post(route, data)
            }

            function parse(raw){
                var list = [];
                   while(raw.length) {
                      list.push(raw.splice(0,4));
                }
                  return list;
           };
    }


})();




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



(function(){

'use strict';


angular.module('myApp.productCtrl', [])
.controller('productCtrl', productCtrl);

productCtrl.$inject = ['$log','apiService'];

function productCtrl($log,apiService){
    var _self = this;
    _self.header = "Top Sellers";
    _self.page = 1;
    _self.productList = [];
    _self.getMore = getMore;

    load();

      // Fetch more items
    function getMore() {
        ga('send', 'event','Category','products','product scroll','/products/'+_self.page);

        if(!apiService.fetching){
            _self.page++;
            apiService.fetch("/api/products",_self.page)
                .success(function(response) {
                      apiService.fetching = false;
                      _self.productList = _self.productList.concat(apiService.parse(response));
                       addthis.layers.refresh();
                    }
                );
        }

      };

    function load(){
        apiService.fetch("/api/products",_self.page)
              .success(function(response) {
                    apiService.fetching = false;
                    console.log($log)
                    _self.productList = apiService.parse(response);
                  }
              );
    }

}



})();





(function(){

'use strict';

    angular.module('myApp.searchCtrl', [])
           .controller('searchCtrl',searchCtrl);

    searchCtrl.$inject = ['$routeParams','$location','apiService'];

    function searchCtrl($routeParams,$location,apiService){

        var _self = this;
        _self.Id = $routeParams.Id;
        _self.header = "Search Results";
        _self.page = 1;
        _self.productList = [];
        _self.getMore = getMore;

        var path = "/api/search/" + _self.Id;

        function search(term){
          path = "/search/"+term;
          ga('send', 'pageview',path);
          $location.path( path );
        }

        function getMore() {
            ga('send', 'event','Search scroll','scroll','Search scroll',path+'/'+_self.page);

            if(!apiService.fetching){

                _self.page++;
                 apiService.fetch(path,_self.page)
                    .success(function(response) {
                        apiService.fetching = false;
                        _self.productList = _self.productList.concat(apiService.parse(response));
                          addthis.layers.refresh();
                         });

            }

         };

        function load() {
            ga('send', 'pageview','/store/' + _self.Id);

            apiService.fetch(path,_self.page)
                .success(function(response) {
                     apiService.fetching = false;
                     _self.productList = apiService.parse(response);
                }
            );
        }

         if(_self.Id) {
            load();
         }


    }



})();

(function(){

'use strict';

angular.module('myApp.storeCtrl', [])
.controller('storeCtrl', storeCtrl);

storeCtrl.$inject = ['$routeParams','apiService'];

function storeCtrl($routeParams,apiService) {
    var _self = this;
    _self.Id = $routeParams.Id;
    var path = "/api/store/" + _self.Id;
    var menuList = {5108:'BustedTees',14592:"Crazy Dog Tshirts",49310:'Zazzle'};
    _self.header = (_self.Id in menuList) ? menuList[_self.Id]: "Top Sellers";
   _self.page = 1;
   _self.productList = [];
   _self.getMore = getMore;

    function getMore() {
        ga('send', 'event','Category','store','store scroll',path+'/'+_self.page);

        if(!apiService.fetching){

            _self.page++;
             apiService.fetch(path,_self.page)
                .success(function(response) {
                    apiService.fetching = false;
                    _self.productList = _self.productList.concat(apiService.parse(response));
                      addthis.layers.refresh();
                     });

        }

     };

    function load() {
        ga('send', 'pageview','/store/' + _self.Id);

        apiService.fetch(path,_self.page)
            .success(function(response) {
                 apiService.fetching = false;
                 _self.productList = apiService.parse(response);
                  addthis.layers.refresh();
            }
        );
    }

     if(_self.Id) {
        load();
     }
}


})();




