(function(){

'use strict';

angular.module('myApp.detailCtrl', [])
.controller('detailCtrl', detailCtrl);

detailCtrl.$inject = ['$routeParams','apiService'];

function detailCtrl($routeParams,apiService) {
    var _self = this;
    _self.Id = $routeParams.Id;
    var path = "/api/detail/" + _self.Id;
    var menuList = {14592:"Crazy Dog Tshirts",49310:'Zazzle'};
    _self.header = path;
   _self.product = null;
   _self.page = angular.element('html').scope().page;

    function load() {
        ga('send', 'pageview','/detail/' + _self.Id);
      
        apiService.get(path)
            .success(function(response) {
                 apiService.fetching = false;
                 console.log(response);
                 _self.product = response;//apiService.parse(response);
                 _self.page.title = _self.product.Name;
                  _self.page.description = _self.product['Short Description'];
                  _self.page.img = _self.product['Big Image'];
              
            }
        );
    }

     if(_self.Id) {
        load();
     }
}

})();




