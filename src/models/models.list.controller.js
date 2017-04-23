function ModelsListController(ModelsService, CurrentUserService, Flash) {
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
          Flash.create('success', 'Model was successfully destroyed.');
          loadModels();
        })
        .catch(function(response) {
          Flash.create('danger', 'Model could not be destroyed.');
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
