(function(sg) {
  sg.app.controller('GroupsController', [ '$scope', '$resource', '$location',
    function($scope, $resource, $location) {
      var Groups = $resource('/api/groups', { format: 'json' });
      Groups.query({},
        ( function(results) { $scope.groups = results; } ),
        ( function(httpResponse) { $scope.groups = null; } )
      );

      $scope.showGroup = function(groupId) { $location.path("/groups/" + groupId); };
    }
  ]);
})(window.sg = window.sg || {});