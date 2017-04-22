function ModelsController($state, $stateParams, ModelsService) {
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
        $state.go('layout.models.list');
      });
  }

  function updateModel() {
    ModelsService.update(vm.model)
      .then(function(response) {
        $state.go('layout.models.list');
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
