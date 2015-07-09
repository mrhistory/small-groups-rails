smallGroups = angular.module('smallGroups', [
  'templates',
  'ngRoute',
  'ngResource',
  'controllers'
])

smallGroups.config([ '$routeProvider',
  ($routeProvider) ->
    $routeProvider
      .when('/',
        templateUrl: 'index.html'
        controller: 'MainController')
])

controllers = angular.module('controllers', [])