var stateDialogTemplate = require('./state.dialog.template.html');

function StatesListController($stateParams, ModelsService, StatesService,
                              CurrentUserService, ngDialog) {
  var vm = this;
  vm.updateStates = updateStates;
  vm.modelWalkState = modelWalkState;
  vm.removeState = removeState;
  vm.openDialog = openDialog;

  function loadStates(modelId) {
    ModelsService.get(modelId)
      .then(function(response) {
        vm.model = response;
        vm.states = vm.model.states;
      });
  }

  function updateStates() {
    StatesService.update(vm.modelId, vm.states)
      .then(function(response) {
        activate();
      });
  }

  function modelWalkState() {
    ModelsService.walkState(vm.modelId)
      .then(function(response) {
        vm.model = response;
        vm.states = vm.model.states;
      });
  }

  function removeState(index) {
    vm.states.splice(index, 1);
  }

  function addState(stateName) {
    vm.states.push({ id: null, order: null, name: stateName });
  }

  function openDialog() {
    ngDialog.open({ templateUrl: stateDialogTemplate,
                    className: 'states__dialog',
                    preCloseCallback: function(value) {
                      if(value && value != '$document' && value !='$closeButton') {
                        addState(value);
                      }
                    }
    });
  }

  function activate() {
    vm.currentUser = CurrentUserService.getCurrentUser();
    vm.modelId = $stateParams.id;
    loadStates(vm.modelId);
  }

  activate();
}

module.exports = StatesListController;
