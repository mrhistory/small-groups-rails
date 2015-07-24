(function(sg) {
  sg.app.controller('GroupController', [ '$scope', '$location', '$resource', '$routeParams', 'flash',
    function($scope, $location, $resource, $routeParams, flash) {
      var Group = $resource('/api/groups/:groupId', { groupId: "@id", format: 'json' });

      Group.get({groupId: $routeParams.groupId},
        ( function(group) { $scope.group = group; } ),
        ( function(httpResponse) {
            $scope.group = null;
            flash.error = "There is no group with ID #{$routeParams.groupId}";
          }
        )
      );

      $scope.back = function() { $location.path('/groups'); };
    }
  ]);
})(window.sg = window.sg || {});