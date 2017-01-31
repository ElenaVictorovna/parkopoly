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

  function routeListener($rootScope, $location, $cookies){
    // keep user logged in after page refresh
    $rootScope.globals = $cookies.getObject('globals') || {};

    $rootScope.$on('$stateChangeStart', function (event, next, current) {
      // redirect to login page if not logged in
      if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
        $location.path('/login');
      }

      // if ($rootScope.globals.currentUser && $location.path() == '/login' ) {
      //   $location.path('/dashboard');
      // }

    });
  }

})();
