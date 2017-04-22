function ModelsListController(ModelsService, CurrentUserService) {
  var vm = this;
  vm.destroyModel = destroyModel;

  function loadModels() {
    ModelsService.getAll()
      .then(function(response) {
        vm.models = response;
      });
  }

  function destroyModel(id) {
    var message = 'Are you sure?';
    if (window.confirm(message)) {
      ModelsService.destroy(id)
        .then(function(response) {
          loadModels();
        });
    }
  }

  function activate() {
    vm.currentUser = CurrentUserService.getCurrentUser();
    loadModels();
  }

  activate();
}

module.exports =  ModelsListController;
