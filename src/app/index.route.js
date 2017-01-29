(function() {
  'use strict';

  angular
    .module('parkopoly')
    .config(routeConfig);

  function routeConfig($stateProvider, appConstant) {

    $stateProvider
      .state(appConstant.STATES.LOGIN.NAME, {
        url: appConstant.STATES.LOGIN.URL,
        views: {
          'main@': {
            templateUrl: 'app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
          }
        }
      })

      .state(appConstant.STATES.MAIN.NAME, {
        url: appConstant.STATES.MAIN.URL,
        abstract: true,
        views: {
          'main@': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'mainCtrl'
          }
        }
      })

      .state(appConstant.STATES.DASHBOARD.NAME, {
        url: appConstant.STATES.DASHBOARD.URL,
        views: {
          'content@main': {
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          }
        }
      });

  }



})();
