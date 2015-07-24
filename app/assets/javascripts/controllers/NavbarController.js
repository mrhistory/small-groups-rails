(function(sg) {
  sg.app.controller('NavbarController', [ '$scope', '$location',
    function($scope, $location) {
      $scope.viewGroups = function() { $location.path('/groups'); }; 
    }
  ]);
})(window.sg = window.sg || {});