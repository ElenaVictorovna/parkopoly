(function() {
  'use strict';

  angular
    .module('parkopoly')
    .directive('pageFooter', pageFooter);

  /** @ngInject */
  pageFooter.$inject = ['$mdDialog'];

  function pageFooter() {
    /** @ngInject */
    function PageFooterController( $mdDialog ) {

      var vm = this;

      vm.showCGUDialog = function(){
        showDialog('Here can be CGU info');
      };

      vm.showContactsDialog = function(){
        showDialog('Here can be your contacts');
      };

      function showDialog(content) {
        $mdDialog.show({
          templateUrl: '/app/dialogs/baseDialog.html',
          clickOutsideToClose: true,
          locals: {
            content: content
          },
          controllerAs: 'dialog',
          controller: function ($mdDialog, content) {
            this.content = content;
            this.closeDialog = function() {
              $mdDialog.hide();
            };
          }
        });
      }

    }

    return {
      templateUrl: 'app/components/pageFooter/pageFooter.html',
      replace: true,
      controller: PageFooterController,
      controllerAs: 'footerCtrl',
      bindToController: true
    };
  }

})();
