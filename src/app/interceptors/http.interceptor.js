(function() {
 'use strict';

 angular.module('parkopoly')
   .factory('httpInterceptor', httpInterceptor);

  httpInterceptor.$inject = ['$q'];
 function httpInterceptor($q) {

   return {

     request: function (config) {

       // expand request config, add authorization header to each request, show loader and so on..

       return config || $q.when(config);

     },

     response: function (response) {

       // hide loader, do things which should be done regardless of the success or error response

       return response || $q.when(response);

     },

     responseError: function (response) {

       // the current method should process error response, show errors and redirect to login page on 401 status error

       return $q.reject(response);

     }
   };

 }
})();
