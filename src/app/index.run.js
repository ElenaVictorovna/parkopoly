(function() {
  'use strict';

  angular
    .module('parkopoly')
    .run(runBlock)
    .run(routeListener);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

  function routeListener($rootScope, $http, $location, $cookies){
    // keep user logged in after page refresh
    $rootScope.globals = $cookies.getObject('globals') || {};

    //$rootScope.$on('$locationChangeStart', function (event, next, current) {
    //  // redirect to login page if not logged in
    //  if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
    //    $location.path('/login');
    //  }
    //
    //  if ($rootScope.globals.currentUser && $location.path() == '/login' ) {
    //    $location.path('/');
    //  }
    //
    //});
  }

})();
