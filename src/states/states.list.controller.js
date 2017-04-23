var stateDialogTemplate = require('./state.dialog.template.html');

function StatesListController($stateParams, ModelsService, CurrentUserService, ngDialog) {
  var vm = this;
  vm.openDialog = openDialog;
  vm.removeState = removeState;

  function loadData(modelId) {
    ModelsService.get(modelId)
      .then(function(response) {
        vm.model = response;
        vm.states = vm.model.states;
      });
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

  function addState(stateName) {
    vm.states.push({ id: null, order: null, name: stateName });
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
