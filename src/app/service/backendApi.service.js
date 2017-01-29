(function() {
  'use strict';

  angular.module('parkopoly')
    .factory('backendApiFactory', backendApiFactory);

  backendApiFactory.$inject = ['$q', 'testData'];

  function backendApiFactory($q, testData) {

    function authenticate(credentials) {
      var deferred = $q.defer();

      var authdata = {
        username: credentials.email,
        password: credentials.password
      };

      //todo here should be request with credentials to the server to get
      //token and/or user's data (don't know how it's implemented in your project)
      //by now just mock it

      deferred.resolve(testData.USER);

      return deferred.promise;
    }

    function getEventList() {
      var deferred = $q.defer();

      //todo here should be request to the server to get event list
      //$http.get(apiUrl + 'api/events')
      //  .then(function(data){
      //    deferred.resolve(data.data);
      //  }, function(error){
      //    $log.error('error getEventList', error);
      //    deferred.reject(error);
      //  });


      //but for now
      deferred.resolve(testData.EVENTS);

      return deferred.promise;
    }

    function getCurrentUser() {
      //send request to the server
      //but for now
      var deferred = $q.defer();

      //but for now
      deferred.resolve(testData.USER);

      return deferred.promise;
    }

    return {
      authenticate:authenticate,
      getEventList: getEventList,
      getCurrentUser: getCurrentUser
    };
  }


})();
