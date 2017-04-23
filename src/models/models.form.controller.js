function ModelsController($state, $stateParams, ModelsService, Flash) {
  var vm = this;
  vm.createModel = createModel;
  vm.updateModel = updateModel;

  function loadModel(id) {
    ModelsService.get(id)
      .then(function(response) {
        vm.model = response;
      });
  }

  function createModel() {
     ModelsService.create(vm.model)
      .then(function(response) {
        Flash.create('success', 'Model was successfully created.');
        $state.go('layout.models.list');
      })
      .catch(function(response) {
        Flash.create('danger', 'Model could not be created.');
      });
  }

  function updateModel() {
    ModelsService.update(vm.model)
      .then(function(response) {
        Flash.create('success', 'Model was successfully updated.');
        $state.go('layout.models.list');
      })
      .catch(function(response) {
        Flash.create('danger', 'Model could not be updated.');
      });
  }

  function activate() {
    if($stateParams.id) {
      loadModel($stateParams.id);
    } else {
      vm.model = {};  
    }    
  }

  activate();
}

module.exports =  ModelsController;
