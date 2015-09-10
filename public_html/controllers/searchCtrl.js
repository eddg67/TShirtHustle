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
        _self.search = search;

        var path = "/api/search/" + _self.Id;

        function search(term){
              path = "/search/"+term;
              ga('send', 'pageview',path);
              console.log(term);
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
