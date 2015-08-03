(function(sg) {
  sg.app.controller('NavbarController', [ '$scope', '$location', 'Session',
    function($scope, $location, Session) {
      $scope.currentUser = Session.getSession();
      console.log('Current User: ' + $scope.currentUser.firstName);
    }
  ]);
})(window.sg = window.sg || {});