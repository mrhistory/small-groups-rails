(function(sg) {
  sg.app = angular.module('smallGroups', [
    'templates',
    'ngRoute',
    'ngResource',
    'angular-flash.service',
    'angular-flash.flash-alert-directive'
  ]);

  sg.app.config([ '$routeProvider', 'flashProvider',
    function($routeProvider, flashProvider) {
      flashProvider.errorClassnames.push('alert-danger');
      flashProvider.warnClassnames.push('alert-warning');
      flashProvider.infoClassnames.push('alert-info');
      flashProvider.successClassnames.push('alert-success');

      $routeProvider
        .when('/', {
          templateUrl: 'main.html',
          controller: 'MainController'
        })
        .when('/groups', {
          templateUrl: 'groups/index.html',
          controller: 'GroupsController'
        })
        .when('/groups/:groupId', {
          templateUrl: 'groups/show.html',
          controller: 'GroupController'
        });
    }
  ]);
})(window.sg = window.sg || {});