
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
                      _self.productList = _self.productList.concat(apiService.parse(response,3));
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
                     console.log(response)
                    _self.productList = apiService.parse(response,3);
                  }
              );
    }

}



})();




