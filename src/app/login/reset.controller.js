//(function() {
//  'use strict';
//
//  angular
//    .module('parkopoly')
//    .controller('ResetController', ResetController);
//
//  ResetController.$inject = ['$scope', '$mdDialog', '$mdToast', 'AuthenticationFactory'];
//  function ResetController($scope, $mdDialog,$mdToast, AuthenticationFactory){
//    $scope.error = false;
//    $scope.loading = false;
//
//    $scope.cancel = function() {
//      $mdDialog.cancel();
//    };
//
//    $scope.doSend = function() {
//      $scope.error = false;
//      $scope.loading = true;
//      AuthenticationFactory.resetPassword($scope.email)
//        .success(function () {
//          $scope.error = false;
//          $scope.loading = false;
//          $scope.showSimpleToast();
//          $mdDialog.hide();
//        }).catch(function (response) {
//        $scope.loading = false;
//        $scope.error = true;
//      });
//    };
//
//    $scope.showSimpleToast = function() {
//      $mdToast.show(
//        $mdToast.simple()
//          .textContent("L'email de rénitialisation de mot de passe vous a été envoyé !")
//          .hideDelay(3000)
//      );
//    };
//
//  }
//
//})();
