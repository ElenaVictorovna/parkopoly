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
      'ngMdIcons',
      'ui.calendar',

      //Application's modules
      'login',
      'main',
      'dashboard'
    ]);

  angular.module('login', []);
  angular.module('main', []);
  angular.module('dashboard', []);

})();
