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
            this.get = get;
            var defaultCount = 3;

            function fetch(route,page) {
               this.page++;
                if(!this.ended){
                  this.fetching = true;
                  return $http.get(route+'/'+page, { page : page })
                  }
             };

              function get(route) {
               this.page++;
                if(!this.ended){
                  this.fetching = true;
                  return $http.get(route)
                  }
             };

            function post(route,data){
                return $http.post(route, data)
            }

            function parse(raw,count){
                var list = [];
                var rowCount = !count ? defaultCount : count;
                   while(raw.length) {
                      list.push(raw.splice(0,rowCount));
                }
                  return list;
           };
    }


})();



