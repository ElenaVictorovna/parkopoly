(function () {
  'use strict';

  angular
    .module('parkopoly')
    .factory('authenticationService', authenticationService);

  authenticationService.$inject = ['$rootScope', '$cookies', '$q', 'backendApiFactory', '$window'];

  function authenticationService($rootScope, $cookies, $q, backendApiFactory, $window) {

    /**
     * Authenticate a user and store auth data in cookie
     * @param credentials user / password to authenticate
     * @returns {Function} promise after backend response
     */
    function authenticate(credentials) {
      var deferred = $q.defer();

      backendApiFactory.authenticate(credentials)
        .then(function (authdata) {

          $cookies.putObject('authenticationToken', authdata.id_token);

          var token = decodeToken(authdata.id_token);
          $cookies.putObject('user_roles', token.auth);

          $rootScope.globals = {
            currentUser: {
              username: credentials.login,
              authdata: token
            }
          };
          $cookies.putObject('globals', $rootScope.globals);
          deferred.resolve();
        }, function () {
          deferred.reject();
        });

      return deferred.promise;
    }

    return {
      authenticate: authenticate
    };
  }
})();
