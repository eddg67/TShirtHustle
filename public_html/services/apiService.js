/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.apiService', []).
service('apiService',function($http){
               this.fetching = false;
               this.ended = false;
               this.page = 1;
               
               this.fetch = function(route,page) {
                      this.page++;
                     if(!this.ended){
                          this.fetching = true;
                         return $http.get(route+'/'+page, { page : page })

                     }
               };

               this.parse = function(raw){

                    var list = [];
                    while(raw.length) {
                        list.push(raw.splice(0,4));
                    }
                    return list;
               };

         });
