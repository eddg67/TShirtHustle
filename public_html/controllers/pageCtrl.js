
(function(){

'use strict';


angular.module('myApp.pageCtrl', [])
.controller('pageCtrl', pageCtrl);

pageCtrl.$inject = ['$log'];

function pageCtrl($log){
    var _self = this;
    _self.header = "Top Sellers";
    _self.title = "Funny t-shirts on high quality soft t-shirt,cool designs from top online retailers, cool shirts and retro vintage tees"
    _self.description = 'Funny t-shirts on high quality soft t-shirt,cool designs from top online retailers, cool shirts and retro vintage tees';
    _self.img = '';

     function setTitle(str){
        _self.title = str;
    }
    
}
})();




