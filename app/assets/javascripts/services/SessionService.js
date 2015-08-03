(function(sg) {
  sg.app.service('Session', [
    function() {
      this.create = function(userId, userRole, email, firstName, lastName) {
        this.userId = userId;
        this.userRole = userRole;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
      };
      this.destroy = function() {
        this.userId = null;
        this.userRole = null;
        this.email = null;
        this.firstName = null;
        this.lastName = null;
      };
      this.getSession = function() {
        return this;
      };
    }
  ]);
})(window.sg = window.sg || {});