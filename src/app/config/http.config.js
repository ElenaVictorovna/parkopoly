(function() {

  'use strict';

  angular
    .module('parkopoly')
    .config(httpConfig);

  httpConfig.$inject = ['$httpProvider'];

  function httpConfig($httpProvider) {

    // $httpProvider.interceptors.push('httpInterceptor');
    $httpProvider.interceptors.push('authInterceptor');
  }

})();
