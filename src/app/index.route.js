(function() {
  'use strict';

  angular
    .module('parkopoly')
    .config(routeConfig);

  function routeConfig($routeProvider, appConstant) {
    $routeProvider
      .when(appConstant.STATES.ROOT, {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboardCtrl'
      })
      .when(appConstant.STATES.LOGIN, {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl'
      })
      .otherwise({
        redirectTo: appConstant.STATES.ROOT
      });
  }



})();
