(function() {
  'use strict';

  angular.module('parkopoly')
    .factory('userService', userService);

  userService.$inject = ['$q', 'backendApiFactory'];
  function userService($q, backendApiFactory) {
    var factory = {};
    factory.user = null;

    /* This function is call just after the login */
    factory.getUserInformation = function() {
      var deferred = $q.defer();

      if (factory.user == null) {
        backendApiFactory.getCurrentUser()
          .then(function (data) {
            factory.user = data;
            deferred.resolve(factory.user);
          });
      } else {
        deferred.resolve(factory.user);
      }
      return deferred.promise;
    };

    /* If other information of the current user is required, remove the getPrescriberAccountList and store
     * all the user information here.
     */
    factory.getPrescriberAccountList = function(refresh){
      var deferred = $q.defer();

      factory.getUserInformation().then(function() {
        deferred.resolve(factory.user.prescriberAccounts);
      });

      return deferred.promise;
    };

    factory.updateIntercom = function() {
      factory.getUserInformation().then(function() {
        Intercom('update', {
          email: factory.user.login,
          name: factory.user.firstName + " " + factory.user.lastName,
          user_hash: CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(factory.user.login, "iicjInwJ60o9DeEsulMetU5W7miJPp1IyM0tposv"))
        });
      });

    };

    return factory;
  }
})();
