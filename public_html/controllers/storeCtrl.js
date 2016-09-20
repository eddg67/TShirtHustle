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
                 _self.productList = apiService.parse(response,3);
                  addthis.layers.refresh();
            }
        );
    }

     if(_self.Id) {
        load();
     }
}


})();




