function LoginController($auth, $state, CurrentUserService) {
  var vm = this;

  vm.submitLogin = function(form) {
    $auth.submitLogin(form)
      .then(function(response) {
        CurrentUserService.setCurrentUser(response);
        $state.go('layout.models.list');
      })
      .catch(function(response) {
        console.log('Error: ' + response.reason);
      });
  };
}

module.exports =  LoginController;
