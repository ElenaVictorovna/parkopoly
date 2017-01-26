(function() {
  'use strict';

  angular
    .module('parkopoly')
    .directive('pageFooter', pageFooter);

  /** @ngInject */
  pageFooter.$inject = [];

  function pageFooter() {
    /** @ngInject */
    function PageFooterController() {

      var vm = this;


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
