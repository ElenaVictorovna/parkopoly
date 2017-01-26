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


    // from https://github.com/auth0/angular-jwt/blob/master/src/angularJwt/services/jwt.js
    function urlBase64Decode(str) {
      var output = str.replace(/-/g, '+').replace(/_/g, '/');
      switch (output.length % 4) {
        case 0:
        {
          break;
        }
        case 2:
        {
          output += '==';
          break;
        }
        case 3:
        {
          output += '=';
          break;
        }
        default:
        {
          throw 'Illegal base64url string!';
        }
      }
      return $window.decodeURIComponent(escape($window.atob(output))); //polyfill https://github.com/davidchambers/Base64.js
    }

    // from https://github.com/auth0/angular-jwt/blob/master/src/angularJwt/services/jwt.js
    function decodeToken(token) {
      var parts = token.split('.');

      if (parts.length !== 3) {
        throw new Error('JWT must have 3 parts');
      }

      var decoded = urlBase64Decode(parts[1]);
      if (!decoded) {
        throw new Error('Cannot decode the token');
      }

      return angular.fromJson(decoded);
    }

    return {
      authenticate: authenticate
    };
  }
})();
