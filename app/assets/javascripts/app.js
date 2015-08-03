(function(sg) {
  sg.app = angular.module('smallGroups', [
    'templates',
    'ngRoute',
    'ngResource',
    'angular-flash.service',
    'angular-flash.flash-alert-directive'
  ]);

  sg.app.config([ '$routeProvider', 'flashProvider', '$httpProvider', 'USER_ROLES',
    function($routeProvider, flashProvider, $httpProvider, USER_ROLES) {
      $httpProvider.interceptors.push([ '$injector',
        function($injector) {
          return $injector.get('AuthInterceptor');
        }
      ]);

      flashProvider.errorClassnames.push('alert-danger');
      flashProvider.warnClassnames.push('alert-warning');
      flashProvider.infoClassnames.push('alert-info');
      flashProvider.successClassnames.push('alert-success');

      $routeProvider
        .when('/', {
          templateUrl: 'main.html',
          controller: 'MainController',
          data: {
            authorizedRoles: [USER_ROLES.all]
          }
        })
        .when('/login', {
          templateUrl: 'login/login.html',
          controller: 'LoginController',
          data: {
            authorizedRoles: [USER_ROLES.all]
          }
        })
        .when('/groups', {
          templateUrl: 'groups/index.html',
          controller: 'GroupsController',
          data: {
            authorizedRoles: [USER_ROLES.all]
          }
        })
        .when('/groups/:groupId', {
          templateUrl: 'groups/show.html',
          controller: 'GroupController',
          data: {
            authorizedRoles: [USER_ROLES.all]
          }
        });
    }
  ]);

  sg.app.run([ '$rootScope', 'AUTH_EVENTS', 'AuthService', '$http', 'Session',
    function($rootScope, AUTH_EVENTS, AuthService, $http, Session) {
      $rootScope.$on('$routeChangeStart', function(event, next) {
        var authorizedRoles = next.data.authorizedRoles;
        if (!AuthService.isAuthorized(authorizedRoles)) {
          event.preventDefault();
          if (AuthService.isAuthenticated()) {
            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
          } else {
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
          }
        }
      });

      $http
        .get('/api/profile.json')
        .then(function(response) {
          Session.create(response.id, '', response.email, response.first_name, response.last_name);
          $rootScope.currentUser = response;
          console.log('Create: User: ' + Session.getSession());
        });
    }
  ]);

  sg.app.factory('AuthInterceptor', [ '$rootScope', '$q', 'AUTH_EVENTS',
    function($rootScope, $q, AUTH_EVENTS) {
      return {
        responseError: function(response) {
          $rootScope.$broadcast({
            401: AUTH_EVENTS.notAuthenticated,
            403: AUTH_EVENTS.notAuthorized,
            416: AUTH_EVENTS.sessionTimeout
          }[response.status], response);
          return $q.reject(response);
        }
      };
    }
  ]);

  sg.app.factory('AuthResolver', [ '$q', '$rootScope', '$location',
    function($q, $rootScope, $route) {
      return {
        resolve: function() {
          var deferred = $q.defer();
          var unwatch = $rootScope.$watch('currentUser', function(currentUser) {
            if (angular.isDefined(currentUser)) {
              deferred.resolve(currentUser);
            } else {
              deferred.reject();
              $location.path('/login');
            }
            unwatch();
          });
          return deferred.promise;
        }
      };
    }
  ]);

  sg.confirm = function(msg, yes_callback, no_callback) {
    function closeModal() {
      $modal.modal('hide');
      $footer.find('button').off();
    }

    var $modal = $('#confirm-message');
    var $footer = $modal.find('.modal-footer');

    $modal.find('.modal-body').html(msg);
    $modal.modal('show');
    $footer.find('button:first').click(function() {
      if (yes_callback) {
        yes_callback();
      }
      closeModal();
    });
    $footer.find('button:last').click(function() {
      if (no_callback) {
        no_callback();
      }
      closeModal();
    });

  };
})(window.sg = window.sg || {});