(function() {
  'use strict';

  angular
    .module('parkopoly')
    .directive('pageFooter', ['$mdDialog', pageFooter]);

  /** @ngInject */
  pageFooter.$inject = [];

  function pageFooter() {
    /** @ngInject */
    function PageFooterController( $mdDialog ) {

      var vm = this;

      vm.showDialog = function($event) {
        var parentEl = angular.element(document.body);

        $mdDialog.show({
          parent: parentEl,
          targetEvent: $event,
          template:
          '<md-dialog aria-label="List dialog">' +
          '  <md-dialog-content>'+
          '    <md-list>'+
          '      <md-list-item>'+
          '       <p>Hello World !</p>' +
          '       <a href="">' +
          '         <md-icon ng-click="dialog.closeDialog()"> clear </md-icon>' +
          '       </a>' +
          '     </md-list-item>' +
          '    </md-list>'+
          '  </md-dialog-content>' +
          '</md-dialog>',
          locals: {
            items: vm.items
          },
          controllerAs: 'dialog',
          controller: function test($scope, $mdDialog, items) {
            vm.items = items;
            this.closeDialog = function() {
              $mdDialog.hide();
            };
          }
        });
      };

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
