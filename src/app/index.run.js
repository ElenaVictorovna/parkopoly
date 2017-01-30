(function() {
  'use strict';

  angular
    .module('parkopoly')
    .config(configBlock)
    .run(runBlock)
    .run(routeListener);

  /** @ngInject */
  function configBlock($urlRouterProvider) {

    // For any unmatched url, send to /index
    $urlRouterProvider.otherwise('/login');

  }

  /** @ngInject */
  function runBlock() {

  }

  function routeListener(){
    //redirect to login if user is unauthorized

  }

})();
