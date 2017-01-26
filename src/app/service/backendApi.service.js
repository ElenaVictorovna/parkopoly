(function() {
  'use strict';

  angular.module('parkopoly')
    .factory('backendApiFactory', backendApiFactory);

  backendApiFactory.$inject = ['$http', 'apiUrl', '$q', '$cookies'];

  function backendApiFactory($http, apiUrl, $q) {

    function authenticate(credentials) {
      var deferred = $q.defer();

      var authdata = {
        username: credentials.email,
        password: credentials.password
      };

      var fakeUser = {
        firstName: 'Arthur',
        lastName: 'Darde',
        fullName: 'Arthur Darde',
        email: 'fakeemail@gmail.com'
      };

      //todo here should be request to the server to get user's data
      //by now just mock it

      deferred.resolve(fakeUser);

      return deferred.promise;
    }

    return {
      authenticate:authenticate
    };
  }


})();
