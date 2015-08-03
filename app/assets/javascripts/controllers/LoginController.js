(function(sg) {
  sg.app.controller('LoginController', [ '$scope', '$location', 'flash', '$rootScope', 'AUTH_EVENTS', 'AuthService',
    function($scope, $location, flash, $rootScope, AUTH_EVENTS, AuthService) {
      $scope.login = function(loginCreds) {
        AuthService.login(loginCreds).then(function(user) {
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          $scope.setCurrentUser(user);
          $location.path('/groups');
        }, function() {
          $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
          flash.error = 'Login failed.';
        });
      };
    }
  ]);
})(window.sg = window.sg || {});