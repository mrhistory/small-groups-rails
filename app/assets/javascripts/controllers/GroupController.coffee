controllers = angular.module('controllers')
controllers.controller('GroupController', [ '$scope', '$location', '$resource', '$routeParams', 'flash'
  ($scope, $location, $resource, $routeParams, flash) ->
    Group = $resource('/groups/:groupId', { groupId: "@id", format: 'json' })

    Group.get({groupId: $routeParams.groupId},
      ( (group) -> $scope.group = group ),
      ( (httpResponse) ->
        $scope.group = null
        flash.error = "There is no group with ID #{$routeParams.groupId}"
      )
    )

    $scope.back = -> $location.path('/groups')
])