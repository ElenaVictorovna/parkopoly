(function() {
  'use strict';

  angular
    .module('parkopoly')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location'];

  function LoginController($location) {

    var vm = this;

    vm.login = login;
    vm.error = false;
    vm.loading = false;

    vm.user = {};

    function login() {
      vm.loading = true;
      vm.error = false;
      authenticationService
        .auth(vm.user)
        .then(onAuthSuccess, onAuthError);
    }

    function onAuthSuccess(){
      $location.path("/");
      vm.loading = false;
      vm.error = false;
      UserFactory.updateIntercom();
    }

    function onAuthError(){
      $location.path("/login");
      vm.loading = false;
      vm.error = true;
    }


    //$scope.showDialog = function(ev) {
    //  // var useFullScreen = ($mdMedia('sm') || ) && $scope.customFullscreen;
    //
    //  $mdDialog.show({
    //      controller: ResetController,
    //      templateUrl: 'app/reset/reset.dialog.html',
    //      parent: angular.element(document.body),
    //      targetEvent: ev,
    //      clickOutsideToClose: true,
    //      fullscreen: $mdMedia('xs')
    //    })
    //    .then(function(answer) {
    //      $scope.status = 'You said the information was "' + answer + '".';
    //    }, function() {
    //      $scope.status = 'You cancelled the dialog.';
    //    });
    //
    //  // $scope.$watch(function() {
    //  //   return $mdMedia('xs') || $mdMedia('sm');
    //  // }, function(wantsFullScreen) {
    //  //   $scope.customFullscreen = (wantsFullScreen === true);
    //  // });
    //};

  }

})();
