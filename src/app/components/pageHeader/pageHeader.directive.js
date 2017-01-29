(function() {
  'use strict';

  angular
    .module('parkopoly')
    .directive('pageHeader', pageHeader);

  /** @ngInject */
  pageHeader.$inject = ['$mdDialog'];

  function pageHeader() {
    /** @ngInject */
    function PageHeaderController($mdDialog) {

      var vm = this;

      vm.showRequestDialog = function(){
        showDialog('Here should be form to send request to the application.')
      };

      vm.showFAQDialog = function(){
        showDialog('Here is FAQ')
      };

      vm.showLangDialog = function(){
        showDialog('As I understood this dropdown for languages won\'t be in real application. At least for now')
      };

      function showDialog(content) {

        $mdDialog.show({
          templateUrl: '/app/dialogs/baseDialog.html',
          clickOutsideToClose: true,
          locals: {
            content: content
          },
          controllerAs: 'dialog',
          controller: function test(content, $mdDialog) {
            this.content = content;
            this.closeDialog = function() {
              $mdDialog.hide();
            };
          }
        });
      }


    }

    return {
      templateUrl: 'app/components/pageHeader/pageHeader.html',
      replace: true,
      controller: PageHeaderController,
      controllerAs: 'headerCtrl',
      bindToController: true
    };
  }

})();
