controllers = angular.module('controllers')
controllers.controller('GroupsController', [ '$scope', '$resource', '$location',
  ($scope, $resource, $location) ->
    Groups = $resource('/groups', { format: 'json' })
    Groups.query({},
      ( (results)-> $scope.groups = results ),
      ( (httpResponse)->
        $scope.groups = null
      )
    )

    $scope.showGroup = (groupId) -> $location.path("/groups/#{groupId}")
])