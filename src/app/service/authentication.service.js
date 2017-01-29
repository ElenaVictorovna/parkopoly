(function () {
  'use strict';

  angular
    .module('parkopoly')
    .factory('authenticationService', authenticationService);

  authenticationService.$inject = ['$q', 'backendApiFactory', 'userService'];

  function authenticationService($q, backendApiFactory, userService) {

    /**
     * Authenticate a user and store auth data in cookie
     * @param credentials user / password to authenticate
     * @returns {Function} promise after backend response
     */
    function auth(credentials) {
      var deferred = $q.defer();

      backendApiFactory.authenticate(credentials)
        .then(function (authdata) {

          //here we will save auth data to cookies and set current user data
          userService.set(authdata);

          deferred.resolve();

        }, function () {
          deferred.reject();
        });

      return deferred.promise;
    }

    return {
      auth: auth
    };
  }
})();
