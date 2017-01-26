(function() {
  'use strict';

  angular
    .module('parkopoly')
    .config(routeConfig);

  function routeConfig($stateProvider, appConstant) {

    $stateProvider
      .state('login', {
        url: appConstant.STATES.LOGIN,
        views: {
          'main@': {
            templateUrl: 'app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
          }
        }
      })

      .state('user', {
        url: appConstant.STATES.ROOT,
        abstract: true,
        views: {
          'main@': {
            templateUrl: 'app/account.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          }
        }
      })

      .state('user.dashboard', {
        url: appConstant.STATES.DASHBOARD,
        views: {
          'content@user': {
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          }
        }
      });

  }



})();
