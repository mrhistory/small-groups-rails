smallGroups = angular.module('smallGroups', [
  'templates',
  'ngRoute',
  'ngResource',
  'controllers',
  'angular-flash.service',
  'angular-flash.flash-alert-directive'
])

smallGroups.config([ '$routeProvider', 'flashProvider',
  ($routeProvider, flashProvider) ->
    flashProvider.errorClassnames.push('alert-danger')
    flashProvider.warnClassnames.push('alert-warning')
    flashProvider.infoClassnames.push('alert-info')
    flashProvider.successClassnames.push('alert-success')

    $routeProvider
      .when('/',
        templateUrl: 'main.html'
        controller: 'MainController'
      ).when('/groups',
        templateUrl: 'groups/index.html'
        controller: 'GroupsController'
      ).when('/groups/:groupId',
        templateUrl: 'groups/show.html'
        controller: 'GroupController'
      )
])

controllers = angular.module('controllers', [])