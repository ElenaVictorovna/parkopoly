(function() {
  'use strict';

  angular.module('parkopoly')
    .factory('backendApiFactory', backendApiFactory);

  backendApiFactory.$inject = ['$http', '$q', '$cookies', '$log', 'testData'];

  function backendApiFactory($http, $q, $cookies, $log, testData) {

    function authenticate(credentials) {
      var deferred = $q.defer();

      var authdata = {
        username: credentials.email,
        password: credentials.password
      };

      //todo here should be request to the server to get user's data
      //by now just mock it

      deferred.resolve(fakeUser);

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

    return {
      authenticate:authenticate,
      getEventList: getEventList
    };
  }


})();
