(function() {
  'use strict';

  angular
    .module('login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$state', '$mdDialog', 'authenticationService', 'appConstant', 'userService'];

  function LoginController($state, $mdDialog, authenticationService, appConstant, userService) {

    var vm = this;

    vm.login = login;

    vm.credentials = {};

    vm.showResetDialog = function() {

      $mdDialog.show({
        controller: 'ResetController',
        controllerAs: 'resetCtrl',
        templateUrl: 'app/login/reset.dialog.html',
        clickOutsideToClose: true
      });

    };

    function login() {
      authenticationService
        .auth(vm.credentials)
        .then(onAuthSuccess, onAuthError);
    }

    function onAuthSuccess(){
      userService.updateIntercom();
      $state.go(appConstant.STATES.DASHBOARD.NAME);
    }

    function onAuthError(){
      $state.go(appConstant.STATES.LOGIN.NAME);
    }



  }

})();
