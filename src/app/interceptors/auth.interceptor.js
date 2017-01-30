(function() {
  'use strict';

  angular.module('parkopoly')
    .factory('authInterceptor', AuthInterceptor);

  AuthInterceptor.$inject = ['$rootScope', '$q', '$cookies', '$location', 'appConstant'];
  function AuthInterceptor($rootScope, $q, $cookies, $location, appConstant) {
    var vm = this;

    vm.whiteListWildCard = '%';
    vm.whiteList = {};

    activate();

    //////////////////////////////////////////////////////

    //put here all endpoints where users don't need to be authenticated (% if all verbs are allowed)
    function activate() {
      vm.whiteList['/api/users/authentication'] = ['POST'];
    }

    function getEndpoint(fullUrl) {
      var result = fullUrl.match(/\/api\/.*/);

      return result ?
        result[0] :
        null;
    }

    function getMethodsAllowed(endpoint) {
      for(var key in vm.whiteList) {
        var result = endpoint.match(prepareKey(key));

        // if 2nd group is not empty then
        // regexp matches and we return methods allowed
        if(result && !result[2]) {
          return vm.whiteList[key];
        }
      }

      return null;
    }

    function prepareKey(str) {
      var modifiedStr = str.replace('/', '\/');
      modifiedStr = '(' + modifiedStr;
      if(modifiedStr.indexOf('**') > -1) {
        modifiedStr = modifiedStr.replace('**', '?.*');
      } else if(modifiedStr.indexOf('*') > -1) {
        modifiedStr = modifiedStr.replace('*', '.*)(\/?.*');
      }
      modifiedStr = modifiedStr + ')';

      return modifiedStr;
    }

    function isRequestNeedAuthorization(method, endpoint) {
      var methods = getMethodsAllowed(endpoint);

      return !methods || (methods.indexOf(vm.whiteListWildCard) == -1 && methods.indexOf(method) == -1);
    }

    function request (config) {
      /*jshint camelcase: false */

      if($rootScope.globals && $rootScope.globals.currentUser && isRequestNeedAuthorization(config.method, config.url)) {
        config.headers = config.headers || {};
        var token = $cookies.getObject('authenticationToken');

        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        config.headers['X-App-Type'] = 'prescriber';
      }

      return config;
    }

    function response (response) {
      if(response.headers && response.headers()['authorization']) {
        $cookies.putObject('authenticationToken', response.headers()['authorization'].split(" ")[1]);
      }
      return response;
    }

    function responseError(rejection) {
      if(rejection.status === 401){
        $rootScope.globals = {};
        $cookies.remove('globals');
        $cookies.remove('user_roles');
        $cookies.remove('authenticationToken');
        $location.path(appConstant.STATES.LOGIN);
      }
      return $q.reject(rejection);
    }

    return {
      request: request,
      response: response,
      responseError: responseError
    }
  }
})();
