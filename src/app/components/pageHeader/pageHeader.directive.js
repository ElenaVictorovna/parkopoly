(function() {
  'use strict';

  angular
    .module('parkopoly')
    .directive('pageHeader', pageHeader);

  /** @ngInject */
  pageHeader.$inject = [];

  function pageHeader() {
    /** @ngInject */
    function PageHeaderController() {

      var vm = this;


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
