(function(sg) {
  sg.app.factory('AuthService', [ '$http', 'Session',
    function($http, Session) {
      var authService = {};

      authService.login = function(credentials) {
        var payload = {
          api_user: credentials
        };
        return $http
          .post('/api/users/sign_in.json', payload)
          .then(function (response) {
            Session.create(response.id, '', response.email, response.first_name, response.last_name);
            return response.data.user;
          });
      };

      authService.isAuthenticated = function() {
        return !!Session.userId;
      };

      authService.isAuthorized = function(authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
          authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) != -1);
      };

      return authService;
    }
  ]);
})(window.sg = window.sg || {});