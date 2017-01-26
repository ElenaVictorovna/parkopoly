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
      'ui.router',
      'ngMaterial',
      'toastr',
      'login',
      'dashboard',

      'material.components.eventCalendar'
    ]);

})();
