controllers = angular.module('controllers')
controllers.controller('NavbarController', [ '$scope', '$location'
  ($scope, $location) ->
    $scope.viewGroups = -> $location.path('/groups')
])