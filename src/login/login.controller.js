function LoginController($auth, $state, CurrentUserService, Flash) {
  var vm = this;

  vm.submitLogin = function(form) {
    $auth.submitLogin(form)
      .then(function(response) {
        CurrentUserService.setCurrentUser(response);
        Flash.create('success', 'Logged in successfully.');
        $state.go('layout.models.list');
      })
      .catch(function(response) {
        Flash.create('danger', 'Incorrect email or password.');
        console.log('Error: ' + response.reason);
      });
  };
}

module.exports = LoginController;
