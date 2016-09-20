(function(){

'use strict';

angular.module('myApp.detailCtrl', [])
.controller('detailCtrl', detailCtrl);

detailCtrl.$inject = ['$routeParams','apiService'];

function detailCtrl($routeParams,apiService) {
    var _self = this;
    _self.Id = $routeParams.Id;
    var path = "/api/detail/" + _self.Id;
    var menuList = {5108:'BustedTees',14592:"Crazy Dog Tshirts",49310:'Zazzle'};
    _self.header = path;
   _self.product = null;

    function load() {
        ga('send', 'pageview','/detail/' + _self.Id);
      
        apiService.get(path)
            .success(function(response) {
                 apiService.fetching = false;
                 console.log(response);
                 _self.product = response;//apiService.parse(response);
            }
        );
    }

     if(_self.Id) {
        load();
     }
}

})();




