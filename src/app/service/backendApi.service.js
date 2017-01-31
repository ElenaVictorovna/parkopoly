(function() {
  'use strict';

  angular.module('parkopoly')
    .factory('backendApiFactory', backendApiFactory);

  backendApiFactory.$inject = ['$rootScope', '$http'];

  function backendApiFactory($rootScope, $http) {

    function authenticate(credentials) {

      return $http.post('https://pro.parkopoly.fr/api/users/authenticate', credentials)
        .then(function(authdata){
          return authdata.data;
      });

    }

    function getMissionList() {
      return $http.get('https://pro.parkopoly.fr/api/mission')
        .then(function(response){
          return response.data;
        });
    }

    function getCurrentUser() {
      return $http.get('https://pro.parkopoly.fr/api/user')
        .then(function(response){
          return response.data;
        });
    }

    return {
      authenticate:authenticate,
      getMissionList: getMissionList,
      getCurrentUser: getCurrentUser
    };
  }


})();
