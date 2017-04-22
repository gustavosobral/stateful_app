function StatesListController($stateParams, StatesService, CurrentUserService) {
  var vm = this;
  vm.removeState = removeState;

  function loadStates(modelId) {
    StatesService.get(modelId)
      .then(function(response) {
        vm.states = response;
      });
  }

  function removeState(index) {
    vm.states.splice(index, 1);
  }

  function activate() {
    vm.currentUser = CurrentUserService.getCurrentUser();
    loadStates($stateParams.id);
  }

  activate();
}

module.exports = StatesListController;
