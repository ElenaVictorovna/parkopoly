(function() {
  'use strict';

  angular
    .module('login')
    .controller('ResetController', ResetController);

  ResetController.$inject = ['$mdDialog'];

  function ResetController($mdDialog){

    this.reset = function() {
      //here should be request to the server to reset password
      //and redirect to login

      //but for now
      this.closeDialog();
    };

    this.closeDialog = function() {
      $mdDialog.hide();
    };

  }

})();
