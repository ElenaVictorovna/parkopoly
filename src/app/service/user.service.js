(function() {
  'use strict';

  angular.module('parkopoly')
    .factory('userService', userService);

  userService.$inject = ['$q', 'backendApiFactory'];
  function userService($q, backendApiFactory) {

    var user = null;

    function set(data) {
      user = data;
      //updateIntercom();
    }

    /* This function is call just after the login */
    function get() {
      var deferred = $q.defer();

      if (!user) {
        backendApiFactory.getCurrentUser()
          .then(function (data) {
            user = data;
            deferred.resolve(user);
          });
      } else {
        deferred.resolve(user);
      }
      return deferred.promise;
    }

    function updateIntercom() {
      get().then(function(user) {
       Intercom('update', {
          email: user.login,
          name: user.firstName + " " + user.lastName,
          user_hash: CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(user.login, "iicjInwJ60o9DeEsulMetU5W7miJPp1IyM0tposv"))
        });
      });
    }

    return {
      set: set,
      get: get,
      updateIntercom: updateIntercom
    };
  }
})();
