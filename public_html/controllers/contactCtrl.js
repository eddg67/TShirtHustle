(function(){

'use strict';

angular.module('myApp.contactCtrl', [])
.controller('contactCtrl', contactCtrl);

contactCtrl.$inject = ['apiService'];

function contactCtrl(apiService) {
    var _self = this;
    var user = {email:'',name:''}
    _self.user = user;
    _self.getEmail = getEmail;
   
     function getEmail(name,email) {
        console.log(name);console.log(email);
        if(!email || !name){
            alert("Please fill in form prior to submitting.")
            return false;
        }
        user.email = email
        user.name = name
        apiService.post("/contact",user)
            .success(function(response) {
                 apiService.fetching = false;
                 console.log(response);
                
            }
        );
          
      };
}
})();






