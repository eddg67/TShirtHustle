(function(){

'use strict';

angular.module('myApp.categoryCtrl', [])
.controller('catergoryCtrl', categoryCtrl);

categoryCtrl.$inject = ['apiService'];

function categoryCtrl(apiService) {
    var _self = this;
    var path = "/api/cat/";
    _self.header = path;
   _self.data = null;

    function load() {
        apiService.get(path)
            .success(function(response) {
                 apiService.fetching = false;
                 console.log(response);
                 _self.data = response;//apiService.parse(response);
            }
        );
    }

    load()
}

})();




