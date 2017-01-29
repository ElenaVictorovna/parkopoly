(function() {
  'use strict';

  angular
    .module('main')
    .controller('MainController', MainController);

  MainController.$inject = ['userService'];

  function MainController(userService) {

    var vm = this;

    userService.get().then(function(data){
      vm.user = data;
    });

    vm.menu = [
      {
        route: 'main.dashboard',
        title: 'Dashboard',
        icon: 'account_box'
      }, {
        route: 'main.createMission',
        title: 'Creer une mission',
        icon: 'send'
      }, {
        route: 'main.missionList',
        title: 'Visualiser less missions',
        icon: 'flag'
      }, {
        route: 'main.pointsOfSale',
        title: 'Comptes utilisateurs at points de vende',
        icon: 'local_offer'
      }, {
        route: 'main.facturation',
        title: 'Facturation',
        icon: 'shopping_cart'
      }, {
        route: 'main.profile',
        title: 'Informations personnelles',
        icon: 'group'
      }
    ];

  }

})();
