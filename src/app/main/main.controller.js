(function() {
  'use strict';

  angular
    .module('main')
    .controller('MainController', MainController);

  MainController.$inject = ['userService'];

  function MainController(userService) {

    var vm = this;

    userService.getUserInformation().then(function(data){
      vm.user = data;
    });

    vm.menu = [
      {
        route: 'main.dashboard',
        title: 'Calendar',
        icon: 'today'
      }, {
        route: 'main.createMission',
        title: 'Creer',
        icon: 'send'
      }, {
        route: 'main.missionList',
        title: 'Liste',
        icon: 'list'
      }, {
        route: 'main.pointsOfSale',
        title: 'Utilisateurs',
        icon: 'person'
      }, {
        route: 'main.facturation',
        title: 'Facturation',
        icon: 'euro_symbol'
      }, {
        route: 'main.profile',
        title: 'Parametres',
        icon: 'settings'
      }, {
        route: 'main.statistic',
        title: 'Statistiques',
        icon: 'timeline'
      }
    ];

  }

})();
