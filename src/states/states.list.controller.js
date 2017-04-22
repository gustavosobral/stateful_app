function StatesListController($stateParams, ModelsService, CurrentUserService) {
  var vm = this;
  vm.removeState = removeState;

  function loadData(modelId) {
    ModelsService.get(modelId)
      .then(function(response) {
        vm.model = response;
        vm.states = vm.model.states;
      });
  }

  function removeState(index) {
    vm.states.splice(index, 1);
  }

  function activate() {
    vm.currentUser = CurrentUserService.getCurrentUser();
    loadData($stateParams.id);
  }

  activate();
}

module.exports = StatesListController;
