(function(sg) {
  sg.app.controller('MainController', [ '$scope', '$routeParams', '$resource',
    function($scope, $routeParams, $resource) {
      var Groups = $resource('/api/groups', { format: 'json' });
      Groups.query({}, function(results) {}, function(httpResponce) {});
    }
  ]);
})(window.sg = window.sg || {});