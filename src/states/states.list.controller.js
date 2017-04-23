var stateDialogTemplate = require('./state.dialog.template.html');

function StatesListController($scope, $stateParams, ModelsService, StatesService,
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

  function findState(stateId) {
    return function(element) {
      return element.id === stateId;
    }
  }

  function removeState(index) {
    vm.states.splice(index, 1);
  }

  function addState(stateName) {
    vm.states.push({ id: null, order: null, name: stateName });
  }

  function editState(state) {
    s = vm.states.find(findState(state.id));
    s.name = state.name;
  }

  function openDialog(state) {
    if(state) {
      $scope.editState = { id: state.id, name: state.name };
    } else {
      $scope.editState = {};
    }

    ngDialog.open({ templateUrl: stateDialogTemplate,
                    className: 'states__dialog',
                    closeByEscape: false,
                    closeByNavigation: false,
                    closeByDocument: false,
                    scope: $scope,
                    preCloseCallback: function(value) {
                      if(value && value !='$closeButton') {
                        if(value.id) {
                          editState(value);
                        } else {
                          addState(value.name);
                        }
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
