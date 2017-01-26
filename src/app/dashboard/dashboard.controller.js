(function() {
  'use strict';

  angular
    .module('parkopoly')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$mdSidenav'];

  function DashboardController($mdSidenav) {

    var vm = this;

    vm.menu = [
      {
        link: 'account box',
        title: 'Dashboard',
        icon: ''
      }, {
        link: '',
        title: 'Creer une mission',
        icon: 'send'
      }, {
        link: '',
        title: 'Visualiser less missions',
        icon: 'flag'
      }, {
        link: '',
        title: 'Comptes utilisateurs at points de vende',
        icon: 'local offer'
      }, {
        link: '',
        title: 'Facturation',
        icon: 'shopping cart'
      }, {
        link: '',
        title: 'Informations personnelles',
        icon: 'group'
      }
    ];


  }

})();
