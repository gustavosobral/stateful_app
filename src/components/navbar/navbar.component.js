var navbarTemplate = require('./navbar.template.html');

function NavbarComponent() {
  return {
    restrict: 'E',
    templateUrl: navbarTemplate,
    controller: NavbarComponentController,
    controllerAs: 'navbarCtrl'
  }

  function NavbarComponentController($state, $auth, CurrentUserService) {
    var vm = this;

    vm.logout = function() {
      $auth.signOut()
        .then(function(response) {
          CurrentUserService.destroyCurrentUser();
          $state.go('index');
        }).catch(function(response) {
          console.log('Error: ' + response.reason);
        });
    }

    function activate() {
      vm.currentUser = CurrentUserService.getCurrentUser();
    }

    activate();
  }
}

module.exports = NavbarComponent;
