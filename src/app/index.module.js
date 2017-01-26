(function() {
  'use strict';

  angular
    .module('parkopoly', [
      // Inject angular modules dependencies
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngRoute',
      'ngMaterial',
      'toastr',
      'login',
      'dashboard',

      'material.components.eventCalendar'
    ]);

})();
