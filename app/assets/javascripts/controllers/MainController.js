(function(sg) {
  sg.app.controller('MainController', [ '$scope', '$routeParams', '$resource',
    function($scope, $routeParams, $resource) {
      sg.loggedIn = false;
    }
  ]);
})(window.sg = window.sg || {});