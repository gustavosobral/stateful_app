var menuTemplate = require('./menu.template.html');

function MenuComponent() {
  return {
    restrict: 'E',
    templateUrl: menuTemplate,
    controller: MenuComponentController,
    controllerAs: 'menuCtrl'
  }

  function MenuComponentController(CurrentUserService) {
    var vm = this;

    function activate() {
      vm.currentUser = CurrentUserService.getCurrentUser();
    }

    activate();
  }
}

module.exports = MenuComponent;
