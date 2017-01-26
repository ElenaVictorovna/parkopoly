(function() {
  'use strict';

  angular
    .module('parkopoly')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$mdSidenav'];

  function DashboardController($mdSidenav) {

    var vm = this;

    vm.user = {
      firstName: 'Arthur',
      lastName: 'Darde',
      fullName: 'Arthur Darde',
      email: 'fakeemail@gmail.com',
      picture: 'assets/images/user_img.png'
    };

    vm.menu = [
      {
        route: 'user.dashboard',
        title: 'Dashboard',
        icon: 'account_box'
      }, {
        route: 'user.createMission',
        title: 'Creer une mission',
        icon: 'send'
      }, {
        route: 'user.missionList',
        title: 'Visualiser less missions',
        icon: 'flag'
      }, {
        route: 'user.pointsOfSale',
        title: 'Comptes utilisateurs at points de vende',
        icon: 'local_offer'
      }, {
        route: 'user.facturation',
        title: 'Facturation',
        icon: 'shopping_cart'
      }, {
        route: 'user.profile',
        title: 'Informations personnelles',
        icon: 'group'
      }
    ];


  }

})();
