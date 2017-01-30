// (function() {
//  'use strict';
//
//  angular.module('parkopoly')
//    .factory('httpInterceptor', httpInterceptor);
//
//   httpInterceptor.$inject = ['$q'];
//  function httpInterceptor($q) {
//
//    return {
//
//      request: function (config) {
//
//
//
//        return config || $q.when(config);
//
//      },
//
//      response: function (response) {
//        // if(response.headers && response.headers()['authorization']) {
//        //   $cookies.putObject('authenticationToken', response.headers()['authorization'].split(" ")[1]);
//        // }
//        return response;
//      },
//
//      responseError: function (response) {
//
//        // the current method should process error response, show errors and redirect to login page on 401 status error
//
//        return $q.reject(response);
//
//      }
//    };
//
//  }
// })();
