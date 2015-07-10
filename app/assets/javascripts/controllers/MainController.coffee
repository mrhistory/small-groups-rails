controllers = angular.module('controllers')
controllers.controller('MainController', [ '$scope', '$routeParams', '$resource',
  ($scope, $routeParams, $resource) ->
    $scope.loggedIn = false
])